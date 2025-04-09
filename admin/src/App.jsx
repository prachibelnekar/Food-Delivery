import React from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Orders from './pages/Orders.jsx'
import Add from './pages/Add.jsx'
import List from './pages/List.jsx'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:4000";

  return (
    <>
    <div>
      <ToastContainer/>
    <Navbar/>
    <hr/>
    {/* app-content */}
    <div className='flex '>
      <Sidebar/>
      <Routes>
        <Route path="/add" element={<Add url={url}/>}/>
        <Route path="/list" element={<List url={url}/>}/>
        <Route path="/orders" element={<Orders url={url}/>}/>
      </Routes>
    </div>
    </div>
    </>
  )
}

export default App