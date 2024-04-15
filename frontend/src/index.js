/// <reference types="redux-persist/types" /> 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { CookiesProvider } from 'react-cookie';
import Shopnextindex from './shopnextindex';
import { Provider } from 'react-redux';
import store,{persistor} from './shopnextstore';
import { PersistGate } from 'redux-persist/es/integration/react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode> 
    <CookiesProvider>
    <Provider store={store}> 
    <PersistGate persistor={persistor}>
     <Shopnextindex/>
     </PersistGate>
     </Provider>
     </CookiesProvider>
  </React.StrictMode>
  
);
