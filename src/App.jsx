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

import { collection, getDocs } from "firebase/firestore";


function App() {
  const [count, setCount] = useState(0)
  // Ejemplo de como guardar la fakedata en un Array
  const [usersData, setUsersData] = useState(users);
  const [fotos, setFotos] = useState(fotosdata);
  const [recordatorios, setRecordatorios] = useState(recordatoriosdata);
  // abrir console en developer tools para ver nuestra data:
  console.log(usersData, fotos, recordatorios);

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="landing" element={<LandingPage /> } />
      <Route path="/" element={<Root />} >
        <Route path="homePage" element={<HomePage />} />
        <Route path="reminders" element={<Recordatorios /> } />
        <Route path="gallery" element={<Galeria /> } />    
        <Route path="/profile" element={<ProfilePage /> } />
      </Route>
      <Route path="/login" element={<Login /> } />
      <Route path="/signup" element={<Signup /> } />
    </>
  ));

  return (
    <RouterProvider router={router} />
  )
}

export default App
