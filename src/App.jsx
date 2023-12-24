import { useState, useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './containers/homePage/HomePage';
import Login from './containers/login/Login';
import Signup from './containers/signup/Signup';
import ProfilePage from './containers/profilePage/ProfilePage';
import Recordatorios from './containers/Recordatorios/Recordatorios';
import Root from './containers/Root/Root';
import Galeria from './containers/galeria/Galeria';
import LandingPage from './containers/landingPage/LandingPage';
import users from './data/users';
import fotosdata from './data/fotosdata';
import AddReminder from './components/reminderForm/AddReminder';
import NotFound from './components/notFound/NotFound';
import UpdateRecordatorioForm from './components/updateRecordatorioForm/UpdateRecordatorioForm';
import RecordatoriosAll from './containers/Recordatorios/recordatoriosAll/RecordatoriosAll';
import RecordatoriosToday from './containers/Recordatorios/recordatoriosToday/RecordatoriosToday';
import GaleriaAll from './containers/galeria/galeriaAll/GaleriaAll';
import GaleriaFavs from './containers/galeria/galeriaFavs/GaleriaFavs';

function App() {
  // Ejemplo de como guardar la fakedata en un Array
  const [usersData, setUsersData] = useState(users);
  const [fotos, setFotos] = useState(fotosdata);
  
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage /> } />
      <Route path="/login" element={<Login /> } />
      <Route path="/signup" element={<Signup /> } />
      <Route path="/v1" element={<Root />} >
        <Route path="homePage" element={<HomePage />} />
        <Route path="reminders" element={<Recordatorios /> } />
        <Route path="reminders/:id" element={<UpdateRecordatorioForm />} />
        <Route path="remindersAll" element={<RecordatoriosAll />} />
        <Route path="remindersToday" element={<RecordatoriosToday />} />
        <Route path="add" element={<AddReminder />} />
        <Route path="gallery" element={<Galeria /> } />  
        <Route path="galleryAll" element={<GaleriaAll />} />  
        <Route path="galleryFavs" element={<GaleriaFavs />} />
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
