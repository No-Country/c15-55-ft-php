import React, { useState, useEffect, useContext } from "react";
import { db } from "../src/config/firestore";
import { collection, getDocs } from "firebase/firestore";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [recordatorios, setRecordatorios] = useState();
    const [currentUser, setCurrentUser] = useState();

    const getReminders = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "reminders"));
            const reminders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setRecordatorios(reminders);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getReminders();
    }, [setRecordatorios]);

    // // testing ---->
    // const [myRecordatorios, SetMyRecordatorios] = useState();
    // const [allTotal, setAllTotal] = useState([]);

    // useEffect(() => {
    //     const filteredRecords = recordatorios.filter((x) => x.user_Id === currentUser.uid);
    //     SetMyRecordatorios(filteredRecords);
    //     if (filteredRecords.length > 0) {
    //         setAllTotal(filteredRecords.length);
    //     } else {
    //         setAllTotal(0);
    //     }
    // }, [recordatorios, currentUser]);


    // // testting --->

    return (
        <AppContext.Provider 
            value={{
                recordatorios,
                setRecordatorios,
                getReminders,
                currentUser,
                setCurrentUser,
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