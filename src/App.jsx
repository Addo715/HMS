import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import RoomsDetails from './Pages/RoomsDetails.jsx';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AllRooms from './Pages/AllRooms.jsx';
import MyBookings from './Pages/MyBookings.jsx';
import Payments from './Pages/Payments.jsx';
import AdminPage from './Pages/Admin/AdminPage.jsx';
import AuthForm from './Pages/AuthForm.jsx';

const App = () => {
  const location = useLocation();

  // Show Navbar only on home page
  const showNavbar = location.pathname === '/';

  // Show Footer on all pages except home page
  const showFooter = location.pathname === '/';

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<AllRooms />} />
        <Route path='/rooms/:id' element={<RoomsDetails />} />
        <Route path='/my-bookings' element={<MyBookings/>}/>
         <Route path="/payment" element={<Payments/>}/>
          <Route path="/admin" element={<AdminPage />} />
          <Route path='signup' element={<AuthForm/>} />

          
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
};

export default App;
