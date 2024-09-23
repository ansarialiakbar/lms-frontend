
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <App />
  </BrowserRouter>
    
 
);
