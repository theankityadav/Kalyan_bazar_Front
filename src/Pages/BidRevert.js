import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Common/Loader'
import { gameNameApi, getNumbers, getresultList, revertBid, getBidRevertList } from '../service/service'

const BidRevert = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [dateSelect, setDateSelect] = useState(moment().format("YYYY-MM-DD"))
    const [selectedGameName, setSelectedGameName] = useState("")
    const [bidRevertList, setBidRevertList] = useState([])
    const [marketId, setMarketId] = useState("")
    const [resultList, setResultList] = useState(false)


    useEffect(() => {
        handleGetGameList()
    }, [])
    console.log(marketId, "marketId");
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

    const handleBidRevert = (id) => {
        setLoader(true)
        revertBid(id).then((res) => {
            handleBidRevertlist(id)
            setLoader(false)
            alert("Bid reverted  Successfully ")
        }).catch((err) => {
            setLoader(false)
            alert(err || "something went wrong ")
        })
    }

    const handleBidRevertlist = (id) => {
        setLoader(true)
        getBidRevertList(id).then((res) => {
            setLoader(false)
            setBidRevertList(res?.data?.data)
            setResultList(true)
            console.log(res?.data?.data, "res?.data?.data");
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
                        <h4 className="card-title text-left w-100">Bid Revert</h4>
                        <div className='row w-100'>
                            <div className='form-group col-md-3'>
                                <input type="date" id="start" className='form-control' value={dateSelect} onChange={(e) => {
                                    setDateSelect(moment(e.target.value).format("YYYY-MM-DD"))
                                }} />
                            </div>
                            <div className='form-group col-md-4'>
                                <select className="form-select" aria-label="Default select example" value={selectedGameName + "|" + marketId} onChange={(e) => {
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
                                <button type="submit" className="btn btn-primary btn-block" id="srchBtn" name="srchBtn" onClick={() => {
                                    // handleBidRevert(marketId)
                                    handleBidRevertlist(marketId)


                                }}>Submit</button>
                            </div>
                        </div>
                    </div>



                    <div className='card p-3 flex align-center space-between'>
                        <div className='flex align-center col-md-12'>
                            <h4 className="card-title text-left w-100 col-md-3 mb-3">Bid Revert List</h4>
                            {resultList ? 
                            <div className='form-group'>
                                    <button type="submit" className="btn btn-primary btn-block" id="srchBtn" name="srchBtn" onClick={() => {
                                        handleBidRevert(marketId)
                                    }}>Revert Bid</button>
                            </div>: null}
                        </div>
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
                                        <th>Game Name</th>
                                        <th>Bid Points</th>
                                        <th>Type</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {bidRevertList?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{item?.user_id__first_name || "NA"}</td>
                                                    <td>{item?.market_inside_id__market_id__market_name || "NA"}</td>
                                                    <td>{item?.points || "NA"}</td>
                                                    <td>{item?.market_inside_id__name || "NA"}</td>
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

export default BidRevert

