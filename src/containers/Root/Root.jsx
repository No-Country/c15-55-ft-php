import React from 'react';
import Header from '../../components/header/Header';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
        <Header />
            <main>
                <Outlet />
            </main>
    </>
  )
}

export default Root