import React, { useState, useEffect, useContext } from "react";
import { db } from "../src/config/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from "../src/config/firestore";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [recordatorios, setRecordatorios] = useState();
    const [currentUser, setCurrentUser] = useState();
    const [users, setUsers] = useState();
    const [userInfo, setUserInfo] = useState([]);

    const [photos, setPhotos] = useState([]);
    const [favPics, setFavPics] = useState([]);

    const getReminders = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "reminders"));
            const reminders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setRecordatorios(reminders);
        } catch (error) {
            console.log(error);
        }
    };

    const getPhotos = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'memories'));
            const allPhotos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setFavPics(allPhotos);
        } catch (error) {
            console.log(error);
        }
    }

    const getUserInfo = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "users"));
            const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsers(users);
        } catch (error) {
            console.log(error);
        }
    }

    const getSingleUser = async () => {
        try {
            if (currentUser?.email) {
                const q = query(collection(db, 'users'), where("email", "==", currentUser.email));
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log(data);
                setUserInfo(data);
                if (data.length > 0) {
                    console.log(`UserInfo:`, data[0].username)
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    // const getPhotos = async () => {
    //     try {
    //         if(currentUser?.uid){
    //             const folderName = `users/${currentUser.uid}/private`;
    //             const storageRef = ref(storage, folderName);
    //             const listResult = await listAll(storageRef);

    //             const photoItems = await Promise.all(
    //                 listResult.items.map(async (item) => {
    //                     const downloadURL = await getDownloadURL(item);
    //                     return {
    //                         name: item.name,
    //                         url: downloadURL,
    //                         // console.log(item.name);
    //                         // console.log('Image URL:', downloadURL);
    //                     };
    //                 })
    //             )
    //             setPhotos(photoItems);
    //         }
    //     } catch (error) {
    //         console.error('Error listing images:', error.message);
    //     }
    // }

    useEffect(() => {
        const fetchData = async () => {
            await getReminders();
            await getUserInfo();
            await getSingleUser();
            await getPhotos();
        }
        fetchData();
    }, [setRecordatorios, setCurrentUser,setUserInfo, setPhotos]);

    useEffect(() => {
        if (userInfo && userInfo.length > 0) {
            console.log(`userInfooooooooooooooooooooo:`, userInfo[0].username);
        }        
    }, [setUserInfo]);

    return (
        <AppContext.Provider 
            value={{
                recordatorios,
                setRecordatorios,
                getReminders,
                currentUser,
                setCurrentUser,
                users,
                setUsers,
                setUserInfo,
                userInfo,
                getSingleUser,
                photos,
                setPhotos,
                setFavPics,
                favPics,
                // myRecordatorios,
                // allTotal,
            }}>
                {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };