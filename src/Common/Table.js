import React from "react";

const Table = ({list}) => {
  return (
    <>
      <div className="card mb-3">
        <div className="card-header">
          <i className="fa fa-table"></i> <b>Fund Request Auto Deposit History</b>
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
                  <th>#</th>
                  <th>User Name</th>
                  <th>Amount</th>
                  <th>Request No.</th>
                  <th>Txn Id</th>
                  <th>Reject Remark</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  list?.map((item,index)=>{
                    return(
                      <tr key={index}>
                      <td>Jonas Alexander</td>
                      <td>{item?.first_name+" "+item?.last_name}</td>
                      <td>San Francisco</td>
                      <td>30</td>
                      <td>2010/07/14</td>
                      <td>$86,500</td>
                      <td>30</td>
                      <td>2010/07/14</td>
                      <td>$86,500</td>
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
