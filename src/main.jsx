import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import { Provider } from 'react-redux';
import {persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/medi-deliver">
      <App />
    </BrowserRouter>
      </PersistGate>
      </Provider>
  </StrictMode>,
)
