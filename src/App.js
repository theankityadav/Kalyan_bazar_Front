import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Common/Navbar";
import Dashbaord from "./Pages/Dashbaord";
import GameName from "./Pages/GameName";
import Login from "./Pages/Login";

function App() {
  return (
    <>
     <BrowserRouter>
        <Navbar/>
        <Routes>
         <Route path="/" element={<Login/> } />
          <Route path="/dashboard" element={<Dashbaord/>} />
          <Route path="/game-name" element={<GameName/>} />
         
          {/* <Route path="/upi-payment" element={<UpiPage/>} />
          <Route path="/payment-status" element={<Payment/>} /> */}
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
