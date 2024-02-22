import moment from 'moment'
import React, { useEffect, useState } from 'react'

import { Loader } from '../../Common/Loader'
import { gameNameApi, getBidHistory } from '../../service/service'


const WinningReport = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [dateSelect, setDateSelect] = useState(moment().format("YYYY-MM-DD"))
    const [selectedGameName, setSelectedGameName] = useState("")
    const [marketId, setMarketId] = useState("")
    const [gameValue, setGameValue] = useState("")
    const[gameName]=useState("market")
    const[gameType]=useState("game_type")
  
    const[bidHistoryList,setBidHistoryList]=useState([])

    useEffect(()=>{
        handleGetBidHistory()
        handleGetGameList()
    },[])

    const handleGetBidHistory =()=>{
      setLoader(true)
      let start_date = moment(dateSelect).format("YYYY-MM-DD")
      let end_date = moment(dateSelect).format("YYYY-MM-DD")
       getBidHistory("admin-win-history",start_date,end_date,marketId,gameName,gameValue,gameType).then((res)=>{
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
                        <h4 className="card-title text-left w-100">Withdraw History Report</h4>
                        <div className='row w-100'>
                            <div className='form-group col-md-3'>
                                <input type="date" id="start" className='form-control' value={dateSelect} onChange={(e) => {
                                    setDateSelect(moment(e.target.value).format("YYYY-MM-DD"))
                                }} />
                            </div>
                            <div className='form-group col-md-3'>
                            <select className="form-select" aria-label="Default select example" value={selectedGameName+"|"+marketId} onChange={(e) => {
                                    setSelectedGameName(e.target.value.split("|")[0])
                                    setMarketId(e.target.value.split("|")[1])
                                }}>
                                    <option selected>Select Game Name</option>
                                    {data?.map((item, index) => {
                                        return (
                                            <option key={index} value={item?.market_name + "|" + item?.id}>{`${item?.market_name || ""} (${item?.market_opening_time}-${item?.market_closing_time})`}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='form-group col-md-3'>
                                <select className="form-select" aria-label="Default select example" value={gameValue} onChange={(e) => {
                                   setGameValue(e.target.value)
                                }}>
                                    <option selected>Select Game Type</option>
                                    <option value="SINGLE DIGIT">Single Digit</option>
                                    <option value="JODI DIGIT">Jodi Digit</option>
                                    <option value="SINGLE PANA">Single Pana</option>
                                    <option value="DOUBLE PANA">Double Pana</option>
                                    <option value="TRIPLE PANA">Triple Pana</option>
                                    <option value="HALF SANGAM">Half Sangam</option>
                                    <option value="FULL SANGAM">Full Sangam</option>
                                </select>
                            </div>
                         
                         
                           
                            <div className='form-group col-md-2'>
                                <button type="submit" className="btn btn-danger btn-block" id="srchBtn" name="srchBtn" onClick={()=>{
                                  handleGetBidHistory()
                                }}>Submit</button>
                            </div>
                        </div>
                    </div>
                  
                

                    <div className='card p-3 flex align-center space-between'>
                        <h4 className="card-title text-left w-100">Withdraw History List</h4>
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
                                  User Name
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
                                  aria-label="Game Type: activate to sort column ascending"
                                >
                                  Game Type
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Session: activate to sort column ascending"
                                >
                                  Session
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Digits: activate to sort column ascending"
                                >
                                  Pana
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Close Digits: activate to sort column ascending"
                                >
                                Amount
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="bidHistoryTable"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Points: activate to sort column ascending"
                                >
                                  Points
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
                                                        <td>{item?.market_inside_id__market_id__market_name}</td>
                                                        <td>{item?.market_inside_id__name|| "NA"}</td>
                                                        <td>{item?.session?"Open":"Closed"}</td>
                                                        <td>{item?.pana || "NA"}
                                                       
                                                        </td>
                                                        <td>{item?.amount || "NA"}
                                                       
                                                        </td>
                                                        <td>{item?.points}</td>
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

export default WinningReport


