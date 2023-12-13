import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import logo from "../Assets/logo.png"
import { changePin } from "../service/service";
import { Loader } from "./Loader";

const Navbar = () => {
  const [show,setShow]=useState(false)
  const[loader,setLoader]=useState(false)
  const[password,setPassword]=useState("")
  const id = localStorage.getItem("id")
  const handleClose =()=>{
    setShow(false)
  }
  const hanldSubmit=()=>{
    let data ={
      user_pin:password,
      user_id:id,
    }
    setLoader(true)
    changePin(data).then((res)=>{
      console.log("res",res)
      setLoader(false)
    }).catch((err)=>{
      console.log("err",err)
      setLoader(false)
      alert("Internal Server Error")
    })

  }
  return (
    <>
      {loader?<Loader/>:null}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav"
      >
        <a className="navbar-brand" href="index.html">
          <img src={logo} alt="logo" width={40} height={40} style={{borderRadius:"50%"}}/>&nbsp;&nbsp;Kalyan Bazar
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav navbar-sidenav left-nav" id="exampleAccordion">
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Dashboard"
            >
              <a className="nav-link" href="/dashboard">
                <i className="fa fa-fw fa-dashboard"></i>
                <span className="nav-link-text">Dashboard</span>
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="User Management"
            >
              <a className="nav-link" href="/user-list">
                <i className="fa fa-fw fa-area-chart"></i>
                <span className="nav-link-text">User Management</span>
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Declare Results"
            >
              <a className="nav-link" href="/declair-result">
                <i className="fa fa-fw fa-table"></i>
                <span className="nav-link-text">Declare Results</span>
              </a>
            </li>
          
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Report Management"
            >
              <a
                className="nav-link nav-link-collapse collapsed"
                data-toggle="collapse"
                href="#ReportManagement"
                data-parent="#exampleAccordion"
              >
                <i className="fa fa-fw fa-wrench"></i>
                <span className="nav-link-text">Report Management</span>
              </a>
              <ul
                className="sidenav-second-level collapse"
                id="ReportManagement"
              >
                <li>
                  <a href="#">Users Bid History</a>
                </li>
                <li>
                  <a href="#">Winning Report</a>
                </li>
                <li>
                  <a href="#">Transfer Point Report</a>
                </li>
                <li>
                  <a href="/withdrawal_report">Withdraw Report</a>
                </li>
                <li>
                  <a href="#">Auto Deposit History</a>
                </li>
              </ul>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Wallet Management"
            >
              <a
                className="nav-link nav-link-collapse collapsed"
                data-toggle="collapse"
                href="#WalletManagement"
                data-parent="#exampleAccordion"
              >
                <i className="fa fa-google-wallet"></i>
                <span className="nav-link-text">Wallet Management</span>
              </a>
              <ul
                className="sidenav-second-level collapse"
                id="WalletManagement"
              >
                <li>
                  <a href="register.html">Withdraw Request</a>
                </li>
                <li>
                  <a href="forgot-password.html">Add Fund (User Wallet)</a>
                </li>
                <li>
                  <a href="blank.html">Bid Revert</a>
                </li>
              </ul>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Games Management"
            >
              <a
                className="nav-link nav-link-collapse collapsed"
                data-toggle="collapse"
                href="#collapseMulti"
                data-parent="#exampleAccordion"
              >
                <i className="fa fa-fw fa-sitemap"></i>
                <span className="nav-link-text">Games Management</span>
              </a>
              <ul className="sidenav-second-level collapse" id="collapseMulti">
                <li>
                  <a href="/game-name">Game Name</a>
                </li>
                <li>
                  <a href="/game-rates">Game Rates</a>
                </li>
              </ul>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Game & Numbers"
            >
              <a
                className="nav-link nav-link-collapse collapsed"
                data-toggle="collapse"
                href="#GameNumbers"
                data-parent="#exampleAccordion"
              >
                <i className="fa fa-gamepad"></i>
                <span className="nav-link-text">Game & Numbers</span>
              </a>
              <ul
                className="sidenav-second-level collapse"
                id="GameNumbers"
              >
                <li>
                  <a href="/games/single_digit">Single Digit</a>
                </li>
                <li>
                  <a href="/games/jodi_digit">Jodi Digit</a>
                </li>
                <li>
                  <a href="/games/single_pana">Single Pana</a>
                </li>
                <li>
                  <a href="/games/double_pana">Double Pana</a>
                </li>
                <li>
                  <a href="/games/triple_pana">Tripple Pana</a>
                </li>
                <li>
                  <a href="/games/half_sangam">Half Sangam</a>
                </li>
                <li>
                  <a href="/games/full_sangam">Full Sangam</a>
                </li>
              </ul>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Settings"
            >
              <a
                className="nav-link nav-link-collapse collapsed"
                data-toggle="collapse"
                href="#Settings"
                data-parent="#exampleAccordion"
              >
                <i className="fa fa-cog"></i>
                <span className="nav-link-text">Settings</span>
              </a>
              <ul
                className="sidenav-second-level collapse"
                id="Settings"
              >
                <li>
                  <a href="#">Main Settings</a>
                </li>
                <li>
                  <a href="#">Contact Settings</a>
                </li>
                <li>
                  <a href="#">Clear Data</a>
                </li>
                <li>
                  <a href="#">Slider Images</a>
                </li>
                <li>
                  <a href="#">How To Play</a>
                </li>
              </ul>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Notice Management"
            >
              <a
                className="nav-link nav-link-collapse collapsed"
                data-toggle="collapse"
                href="#NoticeManagement"
                data-parent="#exampleAccordion"
              >
                <i className="fa fa-sticky-note-o"></i>
                <span className="nav-link-text">Notice Management</span>
              </a>
              <ul
                className="sidenav-second-level collapse"
                id="NoticeManagement"
              >
                <li>
                  <a href="#">Notice Management</a>
                </li>
                <li>
                  <a href="#">Send Notification</a>
                </li>
              </ul>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Starline Management"
            >
              <a
                className="nav-link nav-link-collapse collapsed"
                data-toggle="collapse"
                href="#Starline"
                data-parent="#exampleAccordion"
              >
                <i className="fa fa-star-o"></i>
                <span className="nav-link-text">Starline Management</span>
              </a>
              <ul
                className="sidenav-second-level collapse"
                id="Starline"
              >
                <li>
                  <a href="/startline/game_name">Game Name</a>
                </li>
                <li>
                  <a href="/startline/game_rate">Game Rates</a>
                </li>
                <li>
                  <a href="#">Bid History</a>
                </li>
                <li>
                  <a href="#">Decleare Result</a>
                </li>
                <li>
                  <a href="#">Result History</a>
                </li>
                <li>
                  <a href="#">Starline Sell report</a>
                </li>
                <li>
                  <a href="#">Starline Winning report</a>
                </li>
              </ul>
            </li>
         
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mr-lg-2"
                id="messagesDropdown"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-user"></i> Admin
              </a>
              <div className="dropdown-menu" aria-labelledby="messagesDropdown">
                <a className="dropdown-item" onClick={()=>setShow(true)}>
                  <i className="fa fa-key"></i>&nbsp;&nbsp;Change Password
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item">
                  <i className="fa fa-cogs"></i>&nbsp;&nbsp;Settings
                </a>
                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  >
                  <i className="fa fa-fw fa-sign-out"></i>&nbsp;&nbsp;Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 
                  <input name="password" type="text" onWheel={(e) => e.target.blur()} placeholder="New Password" className="form-control" onChange={(e)=>{
                    setPassword(e.target.value.slice(0,50))
                  }}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={hanldSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
            <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button className="btn btn-primary"  onClick={()=>{
                  localStorage.clear()
                 window.location.href="/"
                }}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Navbar;
