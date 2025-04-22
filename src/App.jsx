import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRout/PrivateRout';
import PublicRoute from './components/PublicRoute';

const Login = lazy(() => import('./pages/LoginPage'));
const Dasboard = lazy(() => import('./pages/DasboardPage'));

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute redirectTo="/home" restricted>
            <Login />
          </PublicRoute>
        }
      />
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/login">
              <Dasboard />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
