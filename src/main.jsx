
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux';
import { Toaster } from 'react-hot-toast'
import {BrowserRouter } from 'react-router-dom'
import store from './Redux/store.js';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </Provider>
    
 
);
