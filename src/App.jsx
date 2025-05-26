import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRout/PrivateRout';
import PublicRoute from './components/PublicRoute';

const Login = lazy(() => import('./pages/LoginPage'));
const Dashboard = lazy(() => import('./pages/DasboardPage'));
const Orders = lazy(() => import('./pages/OrdersPage'));
const Products = lazy(() => import('./pages/ProductsPage'));
const Suppliers = lazy(() => import('./pages/SuppliersPage'));
const Customers = lazy(() => import('./pages/CustomersPage'));

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
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute redirectTo="/login">
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute redirectTo="/login">
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute redirectTo="/login">
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/suppliers"
          element={
            <PrivateRoute redirectTo="/login">
              <Suppliers />
            </PrivateRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <PrivateRoute redirectTo="/login">
              <Customers />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
