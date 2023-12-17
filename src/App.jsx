import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './containers/homePage/HomePage';
import Login from './containers/login/Login';
import Signup from './containers/signup/Signup';
import ProfilePage from './containers/profilePage/ProfilePage';
import Recordatorios from './containers/Recordatorios/Recordatorios';
import Root from './containers/Root/Root';
import Header from './components/header/Header';
import Galeria from './containers/galeria/Galeria';
import LandingPage from './containers/landingPage/LandingPage';
import users from './data/users';
import fotosdata from './data/fotosdata';
import recordatoriosdata from './data/recordatoriosdata';
import AddReminder from './components/reminderForm/AddReminder';
import NotFound from './components/notFound/NotFound';

import { getAuth } from "firebase/auth";
import UpdateRecordatorioForm from './components/updateRecordatorioForm/UpdateRecordatorioForm';

function App() {
  // Ejemplo de como guardar la fakedata en un Array
  const [usersData, setUsersData] = useState(users);
  const [fotos, setFotos] = useState(fotosdata);
  const [recordatorios, setRecordatorios] = useState(recordatoriosdata);

  const auth = getAuth();
  const user = auth.currentUser;
  
  if(!user) {
    console.log('No user logged in');
  } else {
    const currentUser = {
      uid: user.uid,
      email: user.email,
    }
    console.log(currentUser);
  }
  
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage /> } />
      <Route path="/login" element={<Login /> } />
      <Route path="/signup" element={<Signup /> } />
      <Route path="/v1" element={<Root />} >
        <Route path="homePage" element={<HomePage />} />
        <Route path="reminders" element={<Recordatorios /> } />
        <Route path="reminders/:id" element={<UpdateRecordatorioForm />} />
        <Route path="add" element={<AddReminder />} />
        <Route path="gallery" element={<Galeria /> } />    
        <Route path="profile" element={<ProfilePage /> } />
      </Route>
      <Route path="*" element={<NotFound /> } />
    </>
  ));

  return (
    <RouterProvider router={router} />
  )
}

export default App
