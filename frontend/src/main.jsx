import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StorecontextProvider, { Storecontext } from './content/StoreContext.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  <BrowserRouter>
    <StorecontextProvider>
      <App />
    </StorecontextProvider>

  </BrowserRouter>
)
