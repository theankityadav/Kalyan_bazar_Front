import moment from 'moment'
import React, { useEffect, useState } from 'react'
// import { Button } from 'react-bootstrap'
import { Loader } from '../../Common/Loader'
import { gameNameApi, getBidHistory } from '../../service/service'


const AutoDepositHistory = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [dateSelect, setDateSelect] = useState(moment().format("YYYY-MM-DD"))
    // const [selectedGameName, setSelectedGameName] = useState("")
    // const [marketId, setMarketId] = useState("")
    // const [resultList, setResultList] = useState([])
    // const[startDate,setStartDate]=useState(new Date())
    // const [endDate,setEndDate]=useState(new Date())
    // const[gameType,setGameType]=useState("market")
  
    const[bidHistoryList,setBidHistoryList]=useState([])

    useEffect(()=>{
        handleGetBidHistory()
        handleGetGameList()
    },[])

    const handleGetBidHistory =()=>{
      setLoader(true)
      let start_date = moment(dateSelect).format("YYYY-MM-DD")
      let end_date = moment(dateSelect).format("YYYY-MM-DD")
       getBidHistory("admin-deposit-history",start_date,end_date).then((res)=>{
      setBidHistoryList(res.data?.data)
      setLoader(false)
      }).catch((err) => {
        setLoader(false)
        alert(err || "something went wrong ")
      })
    }

   
    const handleGetGameList = () => {
      setLoader(true)
      gameNameApi("normal").then((res) => {
        
          setData(res?.data?.data)
          setLoader(false)
      }).catch((err) => {
          setLoader(false)
          console.log("err", err)
          alert(err?.response?.data?.message || "Internal server error")
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
                        <h4 className="card-title text-left w-100 mb-4">Auto Deposit </h4>
                        <div className='row w-100'>
                            <div className='form-group col-md-3'>
                                <input type="date" id="start" className='form-control' value={dateSelect} onChange={(e) => {
                                    setDateSelect(moment(e.target.value).format("YYYY-MM-DD"))
                                }} />
                            </div>
                         
                       
                         
                           
                            <div className='form-group col-md-2'>
                                <button type="submit" className="btn btn-danger btn-block" id="srchBtn" name="srchBtn" onClick={()=>{
                                  handleGetBidHistory()
                                }}>Submit</button>
                            </div>
                        </div>
                    </div>
                  
                

                    <div className='card p-3 flex align-center space-between'>
                        <h4 className="card-title text-left w-100 mb-4">Auto Deposit History</h4>
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
                                  aria-label="Game Type: activate to sort column ascending"
                                >
                                  First Name
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Session: activate to sort column ascending"
                                >
                                  Amount
                                </th>
                               
                              
                              
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Date: activate to sort column ascending"
                                >
                                  Date
                                </th>
                              </tr>
                            </thead>
                                    <tbody>
                                        {
                                            bidHistoryList?.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{item?.user_id__first_name|| "NA"}</td>
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

export default AutoDepositHistory



