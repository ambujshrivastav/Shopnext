import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { CookiesProvider } from 'react-cookie';
import Shopnextindex from './shopnext/shopnextindex';
import { Provider } from 'react-redux';
import store from './shopnext/shopnextstore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode> 
    <CookiesProvider>
    <Provider store={store}> 
     <Shopnextindex/>
     </Provider>
     </CookiesProvider>
  </React.StrictMode>
  
);
