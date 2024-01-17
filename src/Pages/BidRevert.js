import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Loader } from '../Common/Loader'
import { gameNameApi, getAddNumbers, getNumbers, resultDeclareAPi, getresultList, deleteGameResult, revertBid } from '../service/service'

const BidRevert = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [selectsession, setSelectSession] = useState("0")
    const [numberSum, setNumberSum] = useState("")
    const [numberList, setNumberList] = useState([])
    const [showResultDeclare, setShowResultDeclare] = useState(false)
    const [dateSelect, setDateSelect] = useState(moment().format("YYYY-MM-DD"))
    const [selectedGameName, setSelectedGameName] = useState("")
    const [marketId, setMarketId] = useState("")
    const [resultList, setResultList] = useState([])


    useEffect(() => {
        handleGetGameList()
        handleGetPanalist()
        handleGetResultList()
    }, [])

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

    const handleGetPanalist = () => {
        getNumbers("FULL_SANGAM").then((res) => {
            setNumberList(res?.data?.data[0])
        }).catch((err) => {
            console.log("error", err)
        })
    }


    const handleBidRevert = (id) => {
        setLoader(true)
        revertBid(id).then((res) => {
            setLoader(false)
            alert("Bid reverted  Successfully ")
        }).catch((err) => {
            setLoader(false)
            alert(err || "something went wrong ")
        })
    }






    const handleGetResultList = () => {
        getresultList().then((res) => {
            setResultList(res?.data?.data)
        }).catch((err) => {
            setLoader(false)
            console.log("error", err)
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
                        <h4 class="card-title text-left w-100">Bid Revert</h4>
                        <div className='row w-100'>
                            <div className='form-group col-md-3'>
                                <input type="date" id="start" className='form-control' value={dateSelect} onChange={(e) => {
                                    setDateSelect(moment(e.target.value).format("YYYY-MM-DD"))
                                }} />
                            </div>
                            <div className='form-group col-md-4'>
                                <select class="form-select" aria-label="Default select example" value={selectedGameName + "|" + marketId} onChange={(e) => {
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

                            <div className='form-group col-md-2'>
                                <button type="submit" class="btn btn-primary btn-block" id="srchBtn" name="srchBtn" onClick={() => {
                                    handleBidRevert(marketId)


                                }}>Submit</button>
                            </div>
                        </div>
                    </div>



                    {/* <div className='card p-3 flex align-center space-between'>
                        <h4 class="card-title text-left w-100">Game Result List</h4>
                        <div className='row w-100'>


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
                                        <th>Bid Points</th>
                                        <th>Type</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        resultList?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index}</td>
                                                    <td>{item?.game_name || "NA"}</td>
                                                    <td>{moment(item?.result_date).format("DD-MM-YYYY")}</td>
                                                    <td >{moment(item?.open_declare_date).format("ddd DD-MMM-YYYY, hh:mm A") || "NA"}</td>
                                                    <td><button onClick={() => {
                                                        handleBidRevert(item?.id)
                                                    }}>
                                                        Bit revert </button></td>


                                                </tr>
                                            )
                                        })
                                    }


                                </tbody>
                            </table>

                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default BidRevert

