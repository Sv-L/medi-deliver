import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../SharedLayout/Header';

const Layout = () => {
  return (
    <>
      <header>
        <Header/>
      </header>
          <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default Layout;