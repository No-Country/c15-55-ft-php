import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './containers/homePage/HomePage';
import Login from './containers/login/Login';
import Signup from './containers/signup/Signup';
import ProfilePage from './containers/profilePage/ProfilePage';
import Recordatorios from './containers/Recordatorios/Recordatorios';
import Header from './components/header/Header';
import Galeria from './containers/galeria/Galeria';


function App() {
  const [count, setCount] = useState(0)
  
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<><Header /> <HomePage /></>} />
      <Route path="/login" element={<Login /> } />
      <Route path="/signup" element={<Signup /> } />
      <Route path="/profile" element={<ProfilePage /> } />
      <Route path="/reminders" element={<Recordatorios /> } />
      <Route path="/gallery" element={<Galeria /> } />
    </>
  ));

  return (
    <RouterProvider router={router} />
  )
}

export default App
