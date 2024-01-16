import React from "react";

const MidCards = ({ data }) => {
  return (
    <>
      <div className="dashbaord-users">
        <div className="row">
          <div className="col-4 col mb-3">
            <div className="card text-white bg-custom o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-user"></i>
                </div>
                <div className="mr-5">
                  <h5>Total User's</h5>
                </div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">{data?.users_count}</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-4 col mb-3">
            <div className="card text-white bg-custom o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-gamepad"></i>
                </div>
                <div className="mr-5">
                  <h5>Total Games</h5>
                </div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">{data?.games}</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-4 col mb-3">
            <div className="card text-white bg-custom o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-btc"></i>
                </div>
                <div className="mr-5">
                  <h5>Bid Amount</h5>
                </div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">{data?.bid_amount}</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidCards;
