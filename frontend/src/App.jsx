import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import Footer from './components/Footer.jsx';
import ExploreMenu from './components/ExploreMenu.jsx';
import FoodDisplay from './components/FoodDisplay.jsx';
import AppDownload from './components/AppDownload.jsx';
import LoginPopup from './components/LoginPopup.jsx';
import Verify from './pages/Verify.jsx';
import MyOrders from './pages/MyOrders.jsx';


const App = () => {

  const[showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
    {/* App */}
      <div className='m-auto w-4/5'>
        <Navbar setShowLogin ={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
          <Route path='/exploremenu' element={<ExploreMenu/>} />
          <Route path='/fooddisplay' element={<FoodDisplay/>} />
          <Route path='/appdownload' element={<AppDownload/>} />
          <Route path='/footer' element={<Footer/>} />
          <Route path='/verify' element={<Verify/>} />
          <Route path='/myorders' element={<MyOrders/>} />
        </Routes>
        
      </div>
      <Footer/>

    </>
  )
}

export default App;