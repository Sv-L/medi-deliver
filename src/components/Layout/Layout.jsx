import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../SharedLayout/Header';
import Container from '../Container'

const Layout = () => {
  return (
    <Container>
      <header>
        <Header/>
      </header>
          <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <ToastContainer />
    </Container>
  );
};

export default Layout;