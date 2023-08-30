import React from "react";

const MidCards = () => {
  return (
    <>
      <div className="row">
        <div className="col-xl-4 col-sm-6 mb-3">
          <div className="card text-white bg-primary o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-user"></i>
              </div>
              <div className="mr-5">
                <h5>User's</h5>
              </div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">X X X X X X</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6 mb-3">
          <div className="card text-white bg-warning o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-gamepad"></i>
              </div>
              <div className="mr-5">
                <h5>Games</h5>
              </div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">X X</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6 mb-3">
          <div className="card text-white bg-success o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-btc"></i>
              </div>
              <div className="mr-5">
                <h5>Bid Amount</h5>
              </div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">X X X X</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidCards;
