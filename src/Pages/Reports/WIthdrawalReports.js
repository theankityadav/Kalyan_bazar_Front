import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Loader } from '../../Common/Loader'
import { getTransferHistory } from '../../service/service'


const WithdrawalReports = () => {
    const [loader, setLoader] = useState(false)
    const [dateSelect, setDateSelect] = useState(moment().format("YYYY-MM-DD"))
    const[transferHistoryList,setTransferHistoryList]=useState([])

    useEffect(()=>{
        handleGetTransferHistory()
    },[])

    const handleGetTransferHistory =()=>{
      setLoader(true)
      let start_date = moment(dateSelect).format("YYYY-MM-DD")
      let end_date = moment(dateSelect).format("YYYY-MM-DD")
       getTransferHistory("admin-withdraw-history",start_date,end_date).then((res)=>{
      setTransferHistoryList(res.data?.data)
      setLoader(false)
      }).catch((err) => {
        setLoader(false)
        alert(err || "something went wrong ")
      })
    }
    return (
        <>
            {
                loader ? <Loader /> : null
            }
            <div className="content-wrapper">
                <div className='container-fluid'>
                    <div className='card p-3 flex align-center space-between mb-3'>
                        <h4 className="card-title text-left w-100">Withdraw History Report</h4>
                        <div className='row w-100'>
                            <div className='form-group col-md-3'>
                                <input type="date" id="start" className='form-control' value={dateSelect} onChange={(e) => {
                                    setDateSelect(moment(e.target.value).format("YYYY-MM-DD"))
                                }} />
                            </div>
                            <div className='form-group col-md-2'>
                                <button type="submit" className="btn btn-danger btn-block" id="srchBtn" name="srchBtn" onClick={()=>{
                                  handleGetTransferHistory()
                                }}>Submit</button>
                            </div>
                        </div>
                    </div>
                  
                

                    <div className='card p-3 flex align-center space-between'>
                        <h4 className="card-title text-left w-100">Withdraw List</h4>
                        <div className='row w-100'>

                           
                                <table
                                    className="table table-bordered"
                                    id="dataTable"
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
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
                                  ID
                                </th>
                               
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Game Name: activate to sort column ascending"
                                >
                                  Sender Name
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Game Name: activate to sort column ascending"
                                >
                                  Mobile
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Game Name: activate to sort column ascending"
                                >
                                  Note
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Game Type: activate to sort column ascending"
                                >
                                  Amount
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Session: activate to sort column ascending"
                                >
                                  Date
                                </th>
                              </tr>
                            </thead>
                                    <tbody>
                                        {
                                            transferHistoryList?.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                       
                                                        <td>{index+1}</td>
                                                        <td>{item?.user_id__first_name|| "NA"}</td>
                                                        <td>{item?.user__phone_number|| "NA"}</td>
                                                        <td>{item?.transaction_type}</td>
                                                        <td>{item?.amount}</td>
                                                        <td>{moment(item?.created_at).format("DD-MM-YYYY") || "NA"}</td>

                                                    </tr>
                                                )
                                            })
                                        }


                                    </tbody>
                                </table>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WithdrawalReports


