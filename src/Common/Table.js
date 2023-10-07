import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const Table = ({ list, head }) => {
  const navigate = useNavigate()
  return (
    <>
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
                  <th>#</th>
                  <th>User Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Active</th>

                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {
                  list?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{item?.first_name + " " + item?.last_name}</td>
                        <td>{item?.phone_number}</td>
                        <td>{item?.email}</td>
                        <td>{moment(item?.created_at).format("DD-MM-YYYY")}</td>
                        <td><span className={item?.user_status? "btnspan success" :"btnspan danger"}>
                            {item?.user_status? "Yes" :"No"}
                            </span></td>
                   

                        <td><i className="fa fa-eye primary" onClick={() => navigate("/user-details",
                          { state: item }
                        )}></i></td>
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
