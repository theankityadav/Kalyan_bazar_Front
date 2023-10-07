import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./Common/Navbar";
import Dashbaord from "./Pages/Dashbaord";
import GameName from "./Pages/GameName";
import Login from "./Pages/Login";
import UserDetails from "./Pages/UserDetails";
import GameRate from "./Pages/GameRate";
import Userlist from "./Pages/Userlist";
import GameNumbers from "./Pages/GameNumbers";

function App() {
  return (
    <>
     <BrowserRouter>
        <Navbar/>
        <Routes>
         <Route path="/" element={<Login/> } />
          <Route path="/dashboard" element={<Dashbaord/>} />
          <Route path="/game-name" element={<GameName/>} />
          <Route path="/user-list" element={<Userlist/>} />
          <Route path="/user-details" element={<UserDetails/>} />
          <Route path="/game-rates" element={<GameRate/>} />
          <Route path="/games/:id" element={<GameNumbers/>} />
         
          {/* <Route path="/upi-payment" element={<UpiPage/>} />
          <Route path="/payment-status" element={<Payment/>} /> */}
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
