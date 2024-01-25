import React from "react";
import dashboard from "../Assets/dashboard.jpg"


const UpperCard = ({data}) => {
  return (
    <>
        <div className="row mb-3 card-height">
            <div className="col-xl-12 col-sm-12 mb-3">
				<div className="card">
					<img src={dashboard} className="card-img-top" alt="..." />
					<div className="card-body">
						<div className="row">
                            <div className="col-6">
                                <h5 className="card-title mb-0">{data?.un_approved_users} Unapproved Users</h5>
                            </div>
                            <div className="col-6">
                                <h5 className="card-title mb-0">{data?.approved_users} Approved Users</h5>
                            </div>
                        </div>
					</div>
				</div>
			</div>
            <div className="col-xl-12 col-sm-12 mb-3">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Market Bid Details</h5>
						<p class="card-text">Game Name</p>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <h5 className="card-title mt-1">N/A</h5>
						<p class="card-text">Game Name</p>
					</div>
				</div>
			</div>
        </div>
    </>
  );
};

export default UpperCard;
