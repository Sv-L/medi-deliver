
import { lazy } from 'react';
import { Routes, Route } from "react-router";
const Login = lazy(() => import('./pages/LoginPage'));

function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
  )
}

export default App
