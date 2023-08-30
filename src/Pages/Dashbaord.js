import React from "react";
import Table from "../Common/Table";
import UpperCard from "../Components/UpperCard";
import MidCards from "../Components/MidCards";
import SecondRightCard from "../Components/SecondRightCard";
import SmallCards from "../Components/SmallCards";
const Dashbaord = () => {

  return (
    <>
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Admin</li>
          </ol>
          <div className="row">
            <div className="col-xl-4">
                <UpperCard />
            </div>
            <div className="col-xl-8">
                <MidCards />
                <SecondRightCard />
                <SmallCards />
            </div>
          </div>
          <Table/>
        </div>
        <footer className="sticky-footer">
          <div className="container">
            <div className="text-center">
              <small>Copyright © Kalyan Bazar <span id="autodate"></span></small>
            </div>
          </div>
        </footer>
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
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbaord;
