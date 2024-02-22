import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {
  addFund,
  getBidHistory,
  getFundHistory,
  getUserBidHistory,
  getuserDetails,
  getUserTransaction,
  getuserTransation,
  getuserTransationByid,
  getUserWinHistory,
  updateUserAcitvity,
  updateUserPin,
  userBankdetails,
  userUpiDetails,
  withdrawAmountAPi,
} from "../service/service";
import { Loader } from "../Common/Loader";
import Table from "../Common/Table";

const UserDetails = () => {
  const { state } = useLocation();
  const [show, setShow] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [showWithDraw, setShowWithDrawa] = useState(false);
  const [amount, setAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [pin, setPin] = useState("");
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({});
  const [type, setType] = useState("ALL");
  const handleClose = () => {
    setShow(false);
    setShowPin(false);
  };

  const handleSubmit = () => {
    let data = {
      amount: amount,
      user_id: state?.id,
    };
    addFund(data)
      .then((res) => {
        handleGetUserDetails();
        alert("fund added successfully");
        setShow(false);
      })
      .catch((err) => {
        alert("something went wrong");
        console.log("error", err);
      });
  };
  useEffect(() => {
    handleGetFundHistory();
    handleGetUserDetails();
    handleGetUserBankDetails();
    handleGetUserUpiDetails();
    handleGetBidHistory();
  }, []);

  const handleGetUserDetails = () => {
    setLoader(true);
    getInformation();
    getuserDetails(state?.id)
      .then((res) => {
        setLoader(false);
        setData(res?.data?.data);
      })
      .catch((err) => {
        setLoader(false);
        alert("something went wrong");
        console.log("error", err);
      });
  };

  const handleUpdateUserActivity = (data) => {
    setLoader(true);
    updateUserAcitvity(data)
      .then((res) => {
        setLoader(false);
        handleGetUserDetails();
      })
      .catch((err) => {
        setLoader(false);
        alert("something went wrong");
        console.log("error", err);
      });
  };

  const handleUpdatePin = (e) => {
    e.preventDefault();
    let reqBody = {
      user_id: state?.id,
      user_pin: pin,
    };
    setLoader(true);
    updateUserPin(reqBody)
      .then((res) => {
        handleGetUserDetails();
        setLoader(false);
        setShowPin(false);
      })
      .catch((err) => {
        setLoader(false);
        alert("something went wrong");
        console.log("error", err);
      });
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    let reqBody = {
      user_id: state?.id,
      amount: withdrawAmount,
    };
    setLoader(true);
    withdrawAmountAPi(reqBody)
      .then((res) => {
        handleGetUserDetails();

        setLoader(false);
        setShowWithDrawa(false);
      })
      .catch((err) => {
        setLoader(false);
        alert("something went wrong");
        console.log("error", err);
      });
  };
  const [list, setList] = useState([]);

  const getInformation = () => {
    setLoader(true);
    getuserTransationByid(state?.id)
      .then((res) => {
        setList(res.data.data);
        setLoader(false);
        console.log("res.data", res.data);
      })
      .catch((err) => {
        setLoader(false);
        alert(err || "something went wrong ");
      });
  };
  const [fundHistory, setFundHistory] = useState([]);

  const handleGetFundHistory = () => {
    setLoader(true);
    getFundHistory(state?.id)
      .then((res) => {
        setLoader(false);
        setFundHistory(res.data.data);
      })
      .catch((err) => {
        setLoader(false);
        alert(err || "something went wrong ");
      });
  };
  const [bidHistoryList, setBidHistoryList] = useState([]);

  const handleGetBidHistory = () => {
    getUserBidHistory("get-bid", state?.id)
      .then((res) => {
        setBidHistoryList(res?.data?.data);
        console.log(res?.data?.data, "get-bid");
      })
      .catch((err) => {
        setLoader(false);
        alert(err || "something went wrong ");
      });
  };
  const [winHistoryList, setWinHistoryList] = useState([]);

  const handleWinBidHistory = () => {
    getUserWinHistory("get-win", state?.id)
      .then((res) => {
        setWinHistoryList(res?.data?.data);
        console.log(res?.data?.data, "get-win");
      })
      .catch((err) => {
        setLoader(false);
        alert(err || "something went wrong ");
      });
  };

  useEffect(() => {
    handleTransactionHistory();
    handleWinBidHistory();
  }, []);
  const [transaction_history, setTransactionHistory] = useState([]);
  const handleTransactionHistory = (value) => {
    let temp = value||"ALL"
    getUserTransaction(state?.id, temp)
      .then((res) => {
        setTransactionHistory(res?.data?.data);
      })
      .catch((err) => {
        setLoader(false);
        alert(err || "something went wrong ");
      });
  };

  // console.log("transaction_history",transaction_history)

  const [userBank, setUserBank] = useState([]);
  const [userUpi, setUserUpi] = useState([]);

  const handleGetUserBankDetails = () => {
    setLoader(true);
    userBankdetails(state?.id)
      .then((res) => {
        setLoader(false);
        //  console.log("res",res?.data?.data)
        setUserBank(res?.data?.data);
      })
      .catch((err) => {
        setLoader(false);
        alert(err || "something went wrong ");
      });
  };

  const handleGetUserUpiDetails = () => {
    setLoader(true);
    userUpiDetails(state?.id)
      .then((res) => {
        setLoader(false);
        setUserUpi(res?.data?.data);
      })
      .catch((err) => {
        setLoader(false);
        alert(err || "something went wrong ");
      });
  };

  return (
    <>
      {loader ? <Loader /> : null}
      <div className="content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-2 font-size-18">User Details</h4>
              </div>
            </div>
          </div>

          <div className="row row_col">
            <div className="col-xl-4">
              <div className="card overflow-hidden h100p mb-4">
                <div className="bg-soft-primary">
                  <div className="row">
                    <div className="col-7">
                      <div className="text-primary p-3">
                        <h5
                          className="text-primary"
                          style={{ textTransform: "capitalize" }}
                        >
                          {data?.first_name + " " + data?.last_name}
                        </h5>
                        <p>
                          {data?.phone_number}
                          <a href={`tel:${data?.phone_number}`}>
                            <i className="mdi mdi-cellphone-iphone"></i>
                          </a>
                          <a
                            href={`https://wa.me/91${data?.phone_number}`}
                            target="blank"
                          >
                            <i className="mdi mdi-whatsapp"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col-5 align-center">
                      <div className="p-3 text-right">
                        <div className="mb-2">
                          Active :
                          <a
                            role="button"
                            className="activeDeactiveStatus ml-1"
                            id="success-10603-tb_user-user_id-status"
                            onClick={() => {
                              handleUpdateUserActivity({
                                user_status: !data?.user_status
                                  ? "True"
                                  : "False",
                                user_id: state?.id,
                              });
                            }}
                          >
                            <span
                              className={`badge badge-pill ${
                                data?.user_status
                                  ? "badge-success"
                                  : "badge-danger"
                              } font-size-12`}
                            >
                              {data?.user_status ? "Yes" : "No"}
                            </span>
                          </a>
                        </div>
                        <div className="mb-2">
                          Betting :
                          <a
                            role="button"
                            className="activeDeactiveStatus ml-1"
                            id="success-10603-tb_user-user_id-betting_status"
                            onClick={() => {
                              handleUpdateUserActivity({
                                betting: !data?.betting ? "True" : "False",
                                user_id: state?.id,
                              });
                            }}
                          >
                            <span
                              className={`badge badge-pill ${
                                data?.betting ? "badge-success" : "badge-danger"
                              } font-size-12`}
                            >
                              {data?.betting ? "Yes" : "No"}
                            </span>
                          </a>
                        </div>
                        <div className="mb-2">
                          TP :
                          <a
                            role="button"
                            className="activeDeactiveStatus ml-1"
                            id="danger-10603-tb_user-user_id-transfer_point_status"
                            onClick={() => {
                              handleUpdateUserActivity({
                                transfer: !data?.transfer ? "True" : "False",
                                user_id: state?.id,
                              });
                            }}
                          >
                            <span
                              className={`badge badge-pill ${
                                data?.transfer
                                  ? "badge-success"
                                  : "badge-danger"
                              } font-size-12`}
                            >
                              {data?.transfer ? "Yes" : "No"}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="avatar-md profile-user-wid mb-4">
                        <img
                          src="http://greatmatka.club/adminassets/images/user.png"
                          alt=""
                          className="img-thumbnail rounded-circle"
                        />
                      </div>
                    </div>

                    <div className="col-sm-8">
                      <div className="pt-4">
                        <div className="row">
                          <div className="col-6">
                            <p className="text-muted mb-0">Security Pin</p>
                            <h5 className="font-size-15 mb-0">
                              {data?.user_pin || "NA"}
                            </h5>
                          </div>
                          <div className="col-6">
                            <button
                              className="btn btn-primary btn-sm"
                              id="changePin"
                              onClick={() => {
                                setShowPin(true);
                              }}
                            >
                              Change
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body border-top">
                  <div className="row">
                    <div className="col-sm-12">
                      <div>
                        <p className="text-muted mb-2">Available Balance</p>
                        <h5>{data?.total_amount}</h5>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="mt-3">
                        <button
                          className="btn btn-success btn-sm w-md btn-block"
                          id="adFund"
                          onClick={() => setShow(true)}
                        >
                          Add Fund
                        </button>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mt-3">
                        <button
                          className="btn btn-danger btn-sm w-md btn-block"
                          id="withdrawFund"
                          onClick={() => {
                            setShowWithDrawa(true);
                          }}
                        >
                          Withdraw Fund
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8">
              <div className="card h100p">
                <div className="card-body">
                  <h4 className="card-title mb-4">Personal Information</h4>
                  <div className="table-responsive">
                    <table className="table table-nowrap mb-0">
                      <tbody>
                        <tr>
                          <th scope="row">Full Name :</th>
                          <td>{state?.first_name + " " + state?.last_name}</td>
                          <th scope="row">Email :</th>
                          <td>{state?.email}</td>
                        </tr>
                        <tr>
                          <th scope="row">Mobile :</th>
                          <td>
                            {state?.phone_number}{" "}
                            <a href="tel:917847967695">
                              <i className="mdi mdi-cellphone-iphone"></i>
                            </a>
                            <a href="https://wa.me/917847967695" target="blank">
                              <i className="mdi mdi-whatsapp"></i>
                            </a>
                          </td>
                          <th scope="row">Password :</th>
                          <td>{state?.password}</td>
                        </tr>
                        <tr>
                          <th scope="row">District Name :</th>
                          <td>N/A</td>
                          <th scope="row">Flat/Plot No. :</th>
                          <td>N/A</td>
                        </tr>
                        <tr>
                          <th scope="row">Address Lane 1 :</th>
                          <td>N/A</td>
                          <th scope="row">Address Lane 2 :</th>
                          <td>N/A</td>
                        </tr>
                        <tr>
                          <th scope="row">Area :</th>
                          <td>N/A</td>
                          <th scope="row">Pin Code :</th>
                          <td>N/A</td>
                        </tr>
                        <tr>
                          <th scope="row">State Name :</th>
                          <td>N/A</td>
                          <th scope="row"></th>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row">Creation Date :</th>
                          <td>
                            {moment(state?.created_at).format(
                              "MMMM Do YYYY, h:mm a"
                            )}
                          </td>
                          <th scope="row">Last Seen :</th>
                          <td>
                            {moment(state?.updated_at).format(
                              "MMMM Do YYYY, h:mm a"
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {userBank.length > 0 ? (
              userBank?.map((item, index) => {
                return (
                  <div key={index} className="col-xl-12">
                    <div className="card mb-4">
                      <div className="card-body">
                        <h4 className="card-title mb-4">Payment Information</h4>
                        <div className="table-responsive">
                          <table className="table table-nowrap mb-0">
                            <tbody>
                              <tr>
                                <th scope="row">Bank Name :</th>
                                <td>{item?.bank_name}</td>
                                <th scope="row">Branch Address :</th>
                                <td>{item?.bank_address}</td>
                                <th scope="row"></th>
                                <td></td>
                              </tr>
                              <tr>
                                <th scope="row">A/c Holder Name :</th>
                                <td>{item?.account_holder_name}</td>
                                <th scope="row">A/c Number :</th>
                                <td>{item?.account_number}</td>
                                <th scope="row">IFSC Code :</th>
                                <td>{item?.ifsc_code}</td>
                              </tr>
                              <tr>
                                <th scope="row">Google Pay No. :</th>
                                <td>{userUpi[0]?.upi_id}</td>
                                <th scope="row">PhonePe No. :</th>
                                <td>{userUpi[1]?.upi_id}</td>
                                <th scope="row">Paytm No. :</th>
                                <td>{userUpi[2]?.upi_id}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-xl-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="card-title mb-4">Payment Information</h4>
                    <div className="table-responsive">
                      <table className="table table-nowrap mb-0">
                        <tbody>
                          <tr>
                            <th scope="row">Bank Name :</th>
                            <td>{"NA"}</td>
                            <th scope="row">Branch Address :</th>
                            <td>{"NA"}</td>
                            <th scope="row"></th>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row">A/c Holder Name :</th>
                            <td>{"NA"}</td>
                            <th scope="row">A/c Number :</th>
                            <td>{"NA"}</td>
                            <th scope="row">IFSC Code :</th>
                            <td>{"NA"}</td>
                          </tr>
                          <tr>
                            <th scope="row">Google Pay No. :</th>
                            <td>{"NA"}</td>
                            <th scope="row">PhonePe No. :</th>
                            <td>{"NA"}</td>
                            <th scope="row">Paytm No. :</th>
                            <td>{"NA"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Add Fund Request List</h4>
                  <div className="demo-gallery">
                    <div
                      id="myTable_wrapper"
                      className="dataTables_wrapper dt-bootstrap4 no-footer"
                    >
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <div className="dataTables_length" id="myTable_length">
                            <label>
                              Show{" "}
                              <select
                                name="myTable_length"
                                aria-controls="myTable"
                                className="custom-select custom-select-sm form-control form-control-sm"
                              >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                              </select>{" "}
                              entries
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div id="myTable_filter" className="dataTables_filter">
                            <label>
                              Search:
                              <input
                                type="search"
                                className="form-control form-control-sm"
                                placeholder=""
                                aria-controls="myTable"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <table
                            id="myTable"
                            className="table table-striped table-bordered list-unstyled dataTable no-footer"
                            role="grid"
                            aria-describedby="myTable_info"
                          >
                            <thead>
                              <tr>
                                <th>User Name</th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="myTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Request Amount: activate to sort column ascending"
                                >
                                  Amount
                                </th>

                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="myTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Date: activate to sort column ascending"
                                >
                                  Date
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {fundHistory?.map((item, index) => {
                                return (
                                  <tr>
                                    <td>{item?.user_id__first_name}</td>
                                    <td>{item?.amount}</td>
                                    <td>
                                      {moment(item?.created_at).format(
                                        "YYYY-MM-DD"
                                      )}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-5">
                          <div
                            className="dataTables_info"
                            id="myTable_info"
                            role="status"
                            aria-live="polite"
                          >
                            Showing 0 to 0 of 0 entries
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="myTable_paginate"
                          >
                            <ul className="pagination">
                              <li
                                className="paginate_button page-item previous disabled"
                                id="myTable_previous"
                              >
                                <a
                                  href="#"
                                  aria-controls="myTable"
                                  data-dt-idx="0"
                                  tabindex="0"
                                  className="page-link"
                                >
                                  Previous
                                </a>
                              </li>
                              <li
                                className="paginate_button page-item next disabled"
                                id="myTable_next"
                              >
                                <a
                                  href="#"
                                  aria-controls="myTable"
                                  data-dt-idx="1"
                                  tabindex="0"
                                  className="page-link"
                                >
                                  Next
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="msg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Withdraw Fund Request List</h4>
                  <div className="demo-gallery">
                    <div
                      id="withdrawTable_wrapper"
                      className="dataTables_wrapper dt-bootstrap4 no-footer"
                    >
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <div
                            className="dataTables_length"
                            id="withdrawTable_length"
                          >
                            <label>
                              Show{" "}
                              <select
                                name="withdrawTable_length"
                                aria-controls="withdrawTable"
                                className="custom-select custom-select-sm form-control form-control-sm"
                              >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                              </select>{" "}
                              entries
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div
                            id="withdrawTable_filter"
                            className="dataTables_filter"
                          >
                            <label>
                              Search:
                              <input
                                type="search"
                                className="form-control form-control-sm"
                                placeholder=""
                                aria-controls="withdrawTable"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <Table
                            list={list}
                            handleGetUserDetails={handleGetUserDetails}
                            getInformation={getInformation}
                            head="Fund Request Auto Deposit History"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-5">
                          <div
                            className="dataTables_info"
                            id="withdrawTable_info"
                            role="status"
                            aria-live="polite"
                          >
                            Showing 0 to 0 of 0 entries
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="withdrawTable_paginate"
                          >
                            <ul className="pagination">
                              <li
                                className="paginate_button page-item previous disabled"
                                id="withdrawTable_previous"
                              >
                                <a
                                  href="#"
                                  aria-controls="withdrawTable"
                                  data-dt-idx="0"
                                  tabindex="0"
                                  className="page-link"
                                >
                                  Previous
                                </a>
                              </li>
                              <li
                                className="paginate_button page-item next disabled"
                                id="withdrawTable_next"
                              >
                                <a
                                  href="#"
                                  aria-controls="withdrawTable"
                                  data-dt-idx="1"
                                  tabindex="0"
                                  className="page-link"
                                >
                                  Next
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="msg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input type="hidden" id="user_id" value="10603" />

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Bid History</h4>
                  <div className="">
                    <div
                      id="bidHistoryTable_wrapper"
                      className="dataTables_wrapper dt-bootstrap4 no-footer"
                    >
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <div
                            className="dataTables_length"
                            id="bidHistoryTable_length"
                          >
                            <label>
                              Show{" "}
                              <select
                                name="bidHistoryTable_length"
                                aria-controls="bidHistoryTable"
                                className="custom-select custom-select-sm form-control form-control-sm"
                              >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                              </select>{" "}
                              entries
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div
                            id="bidHistoryTable_filter"
                            className="dataTables_filter"
                          >
                            <label>
                              Search:
                              <input
                                type="search"
                                className="form-control form-control-sm"
                                placeholder=""
                                aria-controls="bidHistoryTable"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <table
                            id="bidHistoryTable"
                            className="table table-striped table-bordered dataTable no-footer"
                            role="grid"
                            aria-describedby="bidHistoryTable_info"
                          >
                            <thead>
                              <tr role="row">
                                <th
                                  className="sorting_desc"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-sort="descending"
                                  aria-label="#: activate to sort column ascending"
                                >
                                  #
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Game Name: activate to sort column ascending"
                                >
                                  Game Name
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Game Name: activate to sort column ascending"
                                >
                                  Game Type
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Game Type: activate to sort column ascending"
                                >
                                  Session
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Session: activate to sort column ascending"
                                >
                                  Bid Digit
                                </th>
                                {/* <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Digits: activate to sort column ascending"
                                >
                                  Close Digit
                                </th> */}
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Close Digits: activate to sort column ascending"
                                >
                                  Points
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Points: activate to sort column ascending"
                                >
                                  Date
                                </th>
                                {/* <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Date: activate to sort column ascending"
                                >
                                  Date
                                </th> */}
                              </tr>
                            </thead>
                            <tbody>
                                {bidHistoryList?.length > 0 ? (
                                  bidHistoryList?.map((item, index) => {
                                    return (
                                    <tr className="odd" key={index}> 
                                      <>
                                        <td>{index+1}</td>
                                        <td>{item?.market_name}</td>
                                        <td>
                                          {
                                            item?.market_inside_name
                                          }
                                        </td>
                                        <td>
                                          {item?.session === true ? "Open" : "Close"}
                                        </td>
                                        <td>{item?.pana}</td>
                                        <td>{item?.points}</td>
                                        <td>
                                          {moment(item?.created_at).format(
                                            "DD-MM-YYYY"
                                          )}
                                        </td>
                                      </>
                                    </tr>
                                    );
                                  })
                                ) : (
                                  <tr>
                                    <td valign="top" className="dataTables_empty">
                                      No data available in table
                                    </td>
                                  </tr>
                                )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-5">
                          <div
                            className="dataTables_info"
                            id="bidHistoryTable_info"
                            role="status"
                            aria-live="polite"
                          >
                            Showing 0 to 0 of 0 entries
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="bidHistoryTable_paginate"
                          >
                            <ul className="pagination">
                              <li
                                className="paginate_button page-item previous disabled"
                                id="bidHistoryTable_previous"
                              >
                                <a
                                  href="#"
                                  aria-controls="bidHistoryTable"
                                  data-dt-idx="0"
                                  tabindex="0"
                                  className="page-link"
                                >
                                  Previous
                                </a>
                              </li>
                              <li
                                className="paginate_button page-item next disabled"
                                id="bidHistoryTable_next"
                              >
                                <a
                                  href="#"
                                  aria-controls="bidHistoryTable"
                                  data-dt-idx="1"
                                  tabindex="0"
                                  className="page-link"
                                >
                                  Next
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="msg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-xl-12 xl-100">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Wallet Transaction History</h4>
                  <ul
                    className="nav nav-tabs nav-tabs-custom nav-justified"
                    id="top-tab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="top-allr-tab"
                        data-toggle="tab"
                        href="#top-allr"
                        role="tab"
                        aria-controls="top-allr"
                        aria-selected="true"
                        onClick={() => handleTransactionHistory()}
                      >
                        All
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="inr-top-tab"
                        data-toggle="tab"
                        href="#top-inr"
                        role="tab"
                        aria-controls="top-inr"
                        aria-selected="false"
                        onClick={() => handleTransactionHistory("CREDIT")}
                      >
                        Credit
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="outr-top-tab"
                        data-toggle="tab"
                        href="#top-outr"
                        role="tab"
                        aria-controls="top-outr"
                        aria-selected="false"
                        onClick={() => handleTransactionHistory("DEBIT")}
                      >
                        Debit
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content p-3" id="top-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="top-allr"
                      role="tabpanel"
                      aria-labelledby="top-allr-tab"
                    >
                      <div className="">
                        <div
                          id="allTransactionTable_wrapper"
                          className="dataTables_wrapper dt-bootstrap4 no-footer"
                        >
                          <div className="row">
                            <div className="col-sm-12 col-md-6">
                              <div
                                className="dataTables_length"
                                id="allTransactionTable_length"
                              >
                                <label>
                                  Show{" "}
                                  <select
                                    name="allTransactionTable_length"
                                    aria-controls="allTransactionTable"
                                    className="custom-select custom-select-sm form-control form-control-sm"
                                  >
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                  </select>{" "}
                                  entries
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <div
                                id="allTransactionTable_filter"
                                className="dataTables_filter"
                              >
                                <label>
                                  Search:
                                  <input
                                    type="search"
                                    className="form-control form-control-sm"
                                    placeholder=""
                                    aria-controls="allTransactionTable"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <table
                                id="allTransactionTable"
                                className="table table-striped table-bordered dataTable no-footer"
                                role="grid"
                                aria-describedby="allTransactionTable_info"
                              >
                                <thead>
                                  <tr role="row">
                                    <th
                                      className="sorting_desc"
                                      tabindex="0"
                                      aria-controls="allTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-sort="descending"
                                      aria-label="#: activate to sort column ascending"
                                    >
                                      #
                                    </th>
                                    <th
                                      className="sorting"
                                      tabindex="0"
                                      aria-controls="allTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Amount: activate to sort column ascending"
                                    >
                                      Amount
                                    </th>
                                    <th
                                      className="sorting"
                                      tabindex="0"
                                      aria-controls="allTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Transaction Note: activate to sort column ascending"
                                    >
                                      Transaction Note
                                    </th>
                                    <th
                                      className="sorting"
                                      tabindex="0"
                                      aria-controls="allTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Date: activate to sort column ascending"
                                    >
                                      Date
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {transaction_history?.map((item, index) => {
                                    return (
                                      <tr role="row" className="odd" key={index}>
                                        <td>{index+1}</td>
                                        <td>{item?.amount}</td>
                                        <td className="sorting_1">
                                          {item?.transaction_type}
                                        </td>
                                        <td>
                                          {moment(item?.created_at).format(
                                            "YYYY-MM-DD"
                                          )}
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-5">
                              <div
                                className="dataTables_info"
                                id="allTransactionTable_info"
                                role="status"
                                aria-live="polite"
                              >
                                Showing 1 to 1 of 1 entries
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-7">
                              <div
                                className="dataTables_paginate paging_simple_numbers"
                                id="allTransactionTable_paginate"
                              >
                                <ul className="pagination">
                                  <li
                                    className="paginate_button page-item previous disabled"
                                    id="allTransactionTable_previous"
                                  >
                                    <a
                                      href="#"
                                      aria-controls="allTransactionTable"
                                      data-dt-idx="0"
                                      tabindex="0"
                                      className="page-link"
                                    >
                                      Previous
                                    </a>
                                  </li>
                                  <li className="paginate_button page-item active">
                                    <a
                                      href="#"
                                      aria-controls="allTransactionTable"
                                      data-dt-idx="1"
                                      tabindex="0"
                                      className="page-link"
                                    >
                                      1
                                    </a>
                                  </li>
                                  <li
                                    className="paginate_button page-item next disabled"
                                    id="allTransactionTable_next"
                                  >
                                    <a
                                      href="#"
                                      aria-controls="allTransactionTable"
                                      data-dt-idx="2"
                                      tabindex="0"
                                      className="page-link"
                                    >
                                      Next
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="top-inr"
                      role="tabpanel"
                      aria-labelledby="inr-top-tab"
                    >
                      <div className="">
                        <div
                          id="inTransactionTable_wrapper"
                          className="dataTables_wrapper dt-bootstrap4 no-footer"
                        >
                          <div className="row">
                            <div className="col-sm-12 col-md-6">
                              <div
                                className="dataTables_length"
                                id="inTransactionTable_length"
                              >
                                <label>
                                  Show{" "}
                                  <select
                                    name="inTransactionTable_length"
                                    aria-controls="inTransactionTable"
                                    className="custom-select custom-select-sm form-control form-control-sm"
                                  >
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                  </select>{" "}
                                  entries
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <div
                                id="inTransactionTable_filter"
                                className="dataTables_filter"
                              >
                                <label>
                                  Search:
                                  <input
                                    type="search"
                                    className="form-control form-control-sm"
                                    placeholder=""
                                    aria-controls="inTransactionTable"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <table
                                id="inTransactionTable"
                                className="table table-striped table-bordered dataTable no-footer"
                                role="grid"
                                aria-describedby="inTransactionTable_info"
                              >
                                <thead>
                                  <tr role="row">
                                    <th
                                      className="sorting_desc"
                                      tabindex="0"
                                      aria-controls="inTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-sort="descending"
                                      aria-label="#: activate to sort column ascending"
                                    >
                                      #
                                    </th>
                                    <th
                                      className="sorting"
                                      tabindex="0"
                                      aria-controls="inTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Amount: activate to sort column ascending"
                                    >
                                      Amount
                                    </th>
                                    <th
                                      className="sorting"
                                      tabindex="0"
                                      aria-controls="inTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Transaction Note: activate to sort column ascending"
                                    >
                                      Transaction Note
                                    </th>
                                    <th
                                      className="sorting"
                                      tabindex="0"
                                      aria-controls="inTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Transfer Note: activate to sort column ascending"
                                    >
                                      Transfer Note
                                    </th>
                                    <th
                                      className="sorting"
                                      tabindex="0"
                                      aria-controls="inTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Date: activate to sort column ascending"
                                    >
                                      Date
                                    </th>
                                    <th
                                      className="sorting"
                                      tabindex="0"
                                      aria-controls="inTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Tx Req. No.: activate to sort column ascending"
                                    >
                                      Tx Req. No.
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                {transaction_history?.map((item, index) => {
                                    return (
                                      <tr role="row" className="odd" key={index}>
                                        <td>{index+1}</td>
                                        <td>{item?.amount}</td>
                                        <td className="sorting_1">
                                          {item?.transaction_type}
                                        </td>
                                        <td>
                                          {moment(item?.created_at).format(
                                            "YYYY-MM-DD"
                                          )}
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-5">
                              <div
                                className="dataTables_info"
                                id="inTransactionTable_info"
                                role="status"
                                aria-live="polite"
                              >
                                Showing 1 to 1 of 1 entries
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-7">
                              <div
                                className="dataTables_paginate paging_simple_numbers"
                                id="inTransactionTable_paginate"
                              >
                                <ul className="pagination">
                                  <li
                                    className="paginate_button page-item previous disabled"
                                    id="inTransactionTable_previous"
                                  >
                                    <a
                                      href="#"
                                      aria-controls="inTransactionTable"
                                      data-dt-idx="0"
                                      tabindex="0"
                                      className="page-link"
                                    >
                                      Previous
                                    </a>
                                  </li>
                                  <li className="paginate_button page-item active">
                                    <a
                                      href="#"
                                      aria-controls="inTransactionTable"
                                      data-dt-idx="1"
                                      tabindex="0"
                                      className="page-link"
                                    >
                                      1
                                    </a>
                                  </li>
                                  <li
                                    className="paginate_button page-item next disabled"
                                    id="inTransactionTable_next"
                                  >
                                    <a
                                      href="#"
                                      aria-controls="inTransactionTable"
                                      data-dt-idx="2"
                                      tabindex="0"
                                      className="page-link"
                                    >
                                      Next
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="top-outr"
                      role="tabpanel"
                      aria-labelledby="outr-top-tab"
                    >
                      <div className="">
                        <div
                          id="outTransactionTable_wrapper"
                          className="dataTables_wrapper dt-bootstrap4 no-footer"
                        >
                          <div className="row">
                            <div className="col-sm-12 col-md-6">
                              <div
                                className="dataTables_length"
                                id="outTransactionTable_length"
                              >
                                <label>
                                  Show{" "}
                                  <select
                                    name="outTransactionTable_length"
                                    aria-controls="outTransactionTable"
                                    className="custom-select custom-select-sm form-control form-control-sm"
                                  >
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                  </select>{" "}
                                  entries
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <div
                                id="outTransactionTable_filter"
                                className="dataTables_filter"
                              >
                                <label>
                                  Search:
                                  <input
                                    type="search"
                                    className="form-control form-control-sm"
                                    placeholder=""
                                    aria-controls="outTransactionTable"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <table
                                id="outTransactionTable"
                                className="table table-striped table-bordered dataTable no-footer"
                                role="grid"
                                aria-describedby="outTransactionTable_info"
                              >
                                <thead>
                                  <tr role="row">
                                    <th
                                      className="sorting_desc"
                                      tabindex="0"
                                      aria-controls="outTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-sort="descending"
                                      aria-label="#: activate to sort column ascending"
                                    >
                                      #
                                    </th>
                                    <th
                                      className="sorting"
                                      tabindex="0"
                                      aria-controls="outTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Amount: activate to sort column ascending"
                                    >
                                      Amount
                                    </th>
                                    <th
                                      className="sorting"
                                      tabindex="0"
                                      aria-controls="outTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Transaction Note: activate to sort column ascending"
                                    >
                                      Transaction Note
                                    </th>
                                    <th
                                      className="sorting"
                                      tabindex="0"
                                      aria-controls="outTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Transfer Note: activate to sort column ascending"
                                    >
                                      Transfer Note
                                    </th>
                                    <th
                                      className="sorting"
                                      tabindex="0"
                                      aria-controls="outTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Date: activate to sort column ascending"
                                    >
                                      Date
                                    </th>
                                    <th
                                      className="sorting"
                                      tabindex="0"
                                      aria-controls="outTransactionTable"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Tx Req. No.: activate to sort column ascending"
                                    >
                                      Tx Req. No.
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                {transaction_history?.map((item, index) => {
                                    return (
                                      <tr role="row" className="odd" key={index}>
                                        <td>{index+1}</td>
                                        <td>{item?.amount}</td>
                                        <td className="sorting_1">
                                          {item?.transaction_type}
                                        </td>
                                        <td>
                                          {moment(item?.created_at).format(
                                            "YYYY-MM-DD"
                                          )}
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-5">
                              <div
                                className="dataTables_info"
                                id="outTransactionTable_info"
                                role="status"
                                aria-live="polite"
                              >
                                Showing 0 to 0 of 0 entries
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-7">
                              <div
                                className="dataTables_paginate paging_simple_numbers"
                                id="outTransactionTable_paginate"
                              >
                                <ul className="pagination">
                                  <li
                                    className="paginate_button page-item previous disabled"
                                    id="outTransactionTable_previous"
                                  >
                                    <a
                                      href="#"
                                      aria-controls="outTransactionTable"
                                      data-dt-idx="0"
                                      tabindex="0"
                                      className="page-link"
                                    >
                                      Previous
                                    </a>
                                  </li>
                                  <li
                                    className="paginate_button page-item next disabled"
                                    id="outTransactionTable_next"
                                  >
                                    <a
                                      href="#"
                                      aria-controls="outTransactionTable"
                                      data-dt-idx="1"
                                      tabindex="0"
                                      className="page-link"
                                    >
                                      Next
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-xl-12 col-md-12">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card mb-4">
                    <div className="card-body">
                      <h4 className="card-title">Winning History Report</h4>
                      <form
                        className="theme-form mega-form"
                        id="userWinningHistoryFrm"
                        name="userWinningHistoryFrm"
                        method="post"
                      >
                        <div className="row">
                          <div className="form-group col-md-3">
                            <label>Date</label>
                            <div className="date-picker">
                              <div className="input-group">
                                <input
                                  className="form-control digits"
                                  type="date"
                                  value="2023-09-20"
                                  name="result_date"
                                  id="result_date"
                                />
                              </div>
                            </div>
                          </div>
                          <input
                            type="hidden"
                            name="user_id"
                            id="user_id"
                            value="10603"
                          />
                          <div className="form-group col-md-2">
                            <label>&nbsp;</label>
                            <button
                              type="submit"
                              className="btn btn-danger waves-light btn-block"
                              id="submitBtn_2"
                              name="submitBtn_2"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                        <div className="form-group">
                          <div id="error_msg"></div>
                        </div>
                        <input type="hidden" id="result_date" />
                        <input type="hidden" id="result_game_name" />
                      </form>

                      <table
                        id="resultHistory"
                        className="table table-striped table-bordered"
                      >
                        <thead>
                          <tr>
                            <th>Amount(₹)</th>
                            <th>Game Name</th>
                            <th>Tx Date</th>
                          </tr>
                        </thead>
                        <tbody id="result_data">
                          
                            {winHistoryList.map((item, index) => {
                              return(
                              <tr role="row" className="odd" key={index}>
                                <>
                                  <td>{index+1}</td>
                                  <td>{item?.points}</td>
                                  <td>
                                          {moment(item?.created_at).format(
                                            "YYYY-MM-DD"
                                          )}
                                  </td>
                                </>
                              
                              </tr>
                              );
                            })}
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Fund</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            name="amount"
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder="Enter Amount "
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value.slice(0, 5))}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showWithDraw} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Withdraw Fund</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            name="amount"
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder="Enter Amount "
            className="form-control"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value.slice(0, 5))}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleWithdraw}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showPin} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Pin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            name="amount"
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder="Enter Pin "
            className="form-control"
            value={pin}
            onChange={(e) => setPin(e.target.value.slice(0, 4))}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdatePin}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserDetails;
