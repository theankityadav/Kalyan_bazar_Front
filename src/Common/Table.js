import React, { useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { approvedFund, rejectFund } from "../service/service";
import { Loader } from "./Loader";
const Table = ({AddFund, list, head,getInformation,handleGetUserDetails }) => {
  const navigate = useNavigate()
  const[loader,setLoader]=useState(false)

  const handleApporvedWithdraw =(data)=>{
    setLoader(true)
    approvedFund(data).then((res)=>{
      getInformation()
      
      if(handleGetUserDetails){
      handleGetUserDetails()
      }
      setLoader(false)
    }).catch((err)=>{
      alert(err?.response?.data?.message||"something went wrong ")
      setLoader(false)
    })
  }
  const handleRejectWithdraw =(data)=>{
    setLoader(true)
    rejectFund(data).then((res)=>{
      getInformation()
      setLoader(false)
    }).catch((err)=>{
      alert(err?.response?.data?.message||"something went wrong ")
      setLoader(false)
    })
  }


  return (
    <>
    {loader?<Loader/>:null}
      <div className="card mb-3">
        <div className="card-header">
          <i className="fa fa-table"></i> <b>{head}</b>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
              cellpadding="0"
            >
              <thead>
                <tr>

                  <th>User Name</th>
                  {!AddFund ? <th>Mobile</th>:null}
                  <th>Amount</th>
                  {!AddFund ? <th>Request ID</th>:null}
              
                  <th>Date</th>
             
                  {!AddFund ? <th>Status</th>:null}

                  {!AddFund ? <th>Action</th>:null}
                </tr>
              </thead>
              <tbody>
                {
                  list?.map((item, index) => {
                    return (
                      <tr key={index}>

                        <td>{item?.user_id__first_name}</td>
                        {!AddFund ?  <td>{item?.user_id__phone_number}</td>:null}
                        <td>{item?.amount}</td>
                        {!AddFund ?   <td>{item?.id}</td>:null}

                        <td>{moment(item?.created_at).format("DD-MM-YYYY , h:mm:ss a")}</td>
                       {!AddFund ? <td><span className={item?.is_rejected ==="PENDING" ? "btnspan pending" :  item?.is_rejected==="APPROVE"?"btnspan success":"btnspan danger"}>
                          {item?.is_rejected }
                        </span></td>:null}


                       {!AddFund ?<td> <Button variant="primary" className="m-1" onClick={()=>{
                          handleApporvedWithdraw({withdrawl_id:item?.id})
                        }} disabled={item?.is_rejected !=="PENDING"} >
                           Approve
                        </Button>
                          <Button variant="danger" className="m-1" onClick={()=>{
                            handleRejectWithdraw({withdrawl_id:item?.id})
                          }}
                          disabled={item?.is_rejected !=="PENDING"}
                          >
                            Reject
                          </Button>
                        </td>:null}

                      </tr>
                    )
                  })
                }


              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer small text-muted">
          Showing 0 to 0 of 0 entries
        </div>
      </div>
    </>
  );
};

export default Table;
