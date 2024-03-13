//eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./Common/Navbar";
import Dashbaord from "./Pages/Dashbaord";
import GameName from "./Pages/GameName";
import GameName2 from "./Pages/StartLine/GameName";
import GameRate2 from "./Pages/StartLine/GameRate";
import Login from "./Pages/Login";
import UserDetails from "./Pages/UserDetails";
import GameRate from "./Pages/GameRate";
import Userlist from "./Pages/Userlist";
import GameNumbers from "./Pages/GameNumbers";
import Resultdeclare from "./Pages/Resultdeclare";
import WithdrawalReport from "./Pages/WithdrawalReport";
import Settings from "./Pages/Settings";
import ImageSlider from "./Pages/ImageSlider";
import BidRevert from "./Pages/BidRevert";
import UserBidHistory from "./Pages/Reports/UserBidHistory";
import WinningReport from "./Pages/Reports/WinningReport";
import AutoDepositHistory from "./Pages/Reports/AutoDepositHistory";
import TransferHistory from "./Pages/Reports/TransferHistory";
// import AdminWithdrawalReports from "./Pages/Reports/WinningReport";
import WithdrawalReports from "./Pages/Reports/WIthdrawalReports";
import StarBidHistory from "./Pages/StartLine/StarBidHistory";
import StarWinReport from "./Pages/StartLine/StarWinReport";

function App() {
  const [token, setToken] = useState(localStorage.getItem("access_token"))

  useEffect(()=>{
   if(!token&&window.location.pathname!=="/"){
     window.location.href="/"
   }
   else{
     return
   }
  },[])

  return (
    <>
      <BrowserRouter>
        {token ? <Navbar /> : null}

        {!token ?
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes> :
          <Routes>
            <Route path="/" element={<Dashbaord />} />
            <Route path="/declair-result" element={<Resultdeclare />} />
            <Route path="/game-name" element={<GameName />} />
            <Route path="/user-list" element={<Userlist />} />
            <Route path="/user-details" element={<UserDetails />} />
            <Route path="/game-rates" element={<GameRate />} />
            <Route path="/games/:id" element={<GameNumbers />} />
            <Route path="/startline/game_name" element={<GameName2 />} />
            <Route path="/startline/game_rate" element={<GameRate2 />} />
            <Route path="/startline/star_bid" element={<StarBidHistory />} />
            <Route path="/startline/star_win" element={<StarWinReport/>} />
            <Route path="/withdrawal_report" element={<WithdrawalReport />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/image-slider" element={<ImageSlider />} />
            <Route path="/bid-revert" element={<BidRevert />} />
            <Route path="/bid-history" element={<UserBidHistory />} />
            <Route path="/winning-history" element={<WinningReport />} />
            <Route path="/transfer-history" element={<TransferHistory />} />
            <Route path="/auto-deposit-history" element={<AutoDepositHistory />} />
            <Route path="/withdrawal-reports" element={<WithdrawalReports />} />
          </Routes>
        }


        {/* <Route path="/upi-payment" element={<UpiPage/>} />
          <Route path="/payment-status" element={<Payment/>} /> */}


      </BrowserRouter>
    </>
  );
}

export default App;
