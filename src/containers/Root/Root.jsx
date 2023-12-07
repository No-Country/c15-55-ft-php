import React from 'react';
import Header from '../../components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

function Root() {
  return (
    <>
        <Header />
            <main>
                <Outlet />
            </main>
        <Footer />
    </>
  )
}

export default Root