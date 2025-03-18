
import { lazy } from 'react';
import { Routes, Route } from "react-router";
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRout/PrivateRout';
import PublicRoute from './components/PublicRoute';

const Login = lazy(() => import('./pages/LoginPage'));
const Dasboard = lazy(() => import('./pages/DasboardPage'));

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route
            path="/"
            element={
              <PublicRoute redirectTo="/dashboard" restricted>
                <Login />
              </PublicRoute>
            }
          />
         <Route
            path="/dashboard"
            element={
              <PrivateRoute redirectTo="/">
                <Dasboard />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
  )
}

export default App
