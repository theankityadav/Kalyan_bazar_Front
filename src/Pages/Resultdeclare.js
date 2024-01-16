import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Loader } from '../Common/Loader'
import { gameNameApi, getAddNumbers, getNumbers, resultDeclareAPi, getresultList, deleteGameResult } from '../service/service'

const Resultdeclare = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [selectsession, setSelectSession] = useState("0")
    const [numberSum, setNumberSum] = useState("")
    const [numberList, setNumberList] = useState([])
    const [showResultDeclare, setShowResultDeclare] = useState(false)
    const [dateSelect, setDateSelect] = useState("")
    const [selectedGameName, setSelectedGameName] = useState("")
    const [marketId, setMarketId] = useState("")
    const [resultList, setResultList] = useState([])

    const [selectedNumberOpen, setselectedNumberOpen] = useState("")
    const [selectedNumberClose, setselectedNumberClose] = useState("")

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

    const handleGetAddNumbers = (id, type) => {
       
        if(type==="1"){
            setselectedNumberOpen(id)
        }
        if(type!=="1"){
            setselectedNumberClose(id)
        }

        setLoader(true)
        let key = type === "1" ? "open" : "close";
        getAddNumbers(id).then((res) => {
           
            setNumberSum({ ...numberSum, [key]: res?.data?.digit })
            setLoader(false)
        }).catch((err) => {
            setLoader(false)
            console.log("error", err)

        })
    }


    const handleDeclaireResultOpen = () => {
        console.log("pp", numberSum)
        alert("open")
        let data = {
            market: marketId,
            game_name: selectedGameName || null,
            result_date: dateSelect,
            open_declare_date: moment().format("YYYY-MM-DD"),

            open_pana_result:selectedNumberOpen+"-"+numberSum?.open,

        }
        resultDeclareAPi(data).then((res) => {
            handleGetResultList()
        }).catch((err) => {
            setLoader(false)
            console.log("error", err)

        })



    }
    const handleDeclaireResultClose = () => {
        alert("close")
        let data = {
            market: marketId,
            game_name: selectedGameName || null,
            result_date: dateSelect,

            close_declare_date: moment().format("YYYY-MM-DD"),

            close_pana_result: numberSum?.close+"-"+selectedNumberClose
        }
        resultDeclareAPi(data).then((res) => {
            console.log("result", res)
            handleGetResultList()
        }).catch((err) => {
            setLoader(false)
            console.log("error", err)

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
 const handleDelete =(id,isOpen)=>{
    setLoader(true)
    deleteGameResult(id,isOpen).then((res)=>{
   
        handleGetResultList()
       setLoader(false)
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
                        <h4 class="card-title text-left w-100">Select Game</h4>
                        <div className='row w-100'>
                            <div className='form-group col-md-3'>
                                <input type="date" id="start" className='form-control' value={dateSelect} onChange={(e) => {
                                    setDateSelect(moment(e.target.value).format("YYYY-MM-DD"))
                                }} />
                            </div>
                            <div className='form-group col-md-4'>
                                <select class="form-select" aria-label="Default select example" value={selectedGameName+"|"+marketId} onChange={(e) => {
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
                                <select class="form-select" value={selectsession} aria-label="Default select example" onChange={(e) => setSelectSession(e.target.value)}>
                                    <option value="0" >Both Session</option>
                                    <option value="1">open</option>
                                    <option value="2">close</option>
                                </select>
                            </div>
                            <div className='form-group col-md-2'>
                                <button type="submit" class="btn btn-danger btn-block" id="srchBtn" name="srchBtn" onClick={() => {
                                    setShowResultDeclare(true)
                                    setNumberSum("")

                                }}>Go</button>
                            </div>
                        </div>
                    </div>
                    {
                        showResultDeclare ?

                            <div className='card p-3 flex align-center space-between mb-3'>
                                <h4 class="card-title text-left w-100">Declare Result</h4>
                                {selectsession !== "0" ?
                                    <div className='row w-100'>
                                        <div className='form-group col-md-4'>
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => {

                                                handleGetAddNumbers(e.target.value, selectsession)
                                            }}>
                                                <option selected>{"Select " + (selectsession === "1" ? "Open" : "Close") + " Panna"}</option>
                                                {
                                                    selectsession === "1" ? numberList?.open_ank?.map((item, index) => {
                                                        return (
                                                            <option value={item}>{item}</option>
                                                        )
                                                    })
                                                        : numberList?.close_ank?.map((item, index) => {
                                                            return (
                                                                <option value={item}>{item}</option>
                                                            )
                                                        })
                                                }
                                            </select>
                                        </div>
                                        <div className='form-group col-md-3'>
                                            <input type="text" id="start" className='form-control' value={numberSum?.close || numberSum?.open} placeholder='Digit' />
                                        </div>
                                        {/* <div className='form-group col-md-2'>
                                            <button type="submit" class="btn btn-primary btn-block" id="srchBtn" name="srchBtn">Save</button>
                                        </div> */}
                                        <div className='form-group col-md-2'>
                                            <button type="submit" class="btn btn-danger btn-block" id="srchBtn" name="srchBtn" onClick={(e) => {
                                                e.preventDefault()
                                                selectsession === "1" ? handleDeclaireResultOpen() : handleDeclaireResultClose();
                                            }}>Declare</button>
                                        </div>
                                    </div> :
                                    <>  <div className='row w-100'>
                                        <div className='form-group col-md-4'>
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => {
                                                handleGetAddNumbers(e.target.value, "1")
                                            }}>
                                                <option selected>Select Open Panna</option>
                                                {
                                                    numberList?.open_ank?.map((item, index) => {
                                                        return (
                                                            <option value={item}>{item}</option>
                                                        )
                                                    })

                                                }
                                            </select>
                                        </div>
                                        <div className='form-group col-md-3'>
                                            <input type="text" id="start" className='form-control' value={numberSum?.open} placeholder='Digit' />
                                        </div>
                                        {/* <div className='form-group col-md-2'>
                                            <button type="submit" class="btn btn-primary btn-block" id="srchBtn" name="srchBtn">Save</button>
                                        </div> */}
                                        <div className='form-group col-md-2'>
                                            <button type="submit" class="btn btn-danger btn-block" id="srchBtn" name="srchBtn" onClick={handleDeclaireResultOpen}>Declare</button>
                                        </div>
                                    </div>
                                        <br></br>
                                        <div className='row w-100'>
                                            <div className='form-group col-md-4'>
                                                <select class="form-select" aria-label="Default select example" onChange={(e) => {
                                                    handleGetAddNumbers(e.target.value, "2")
                                                }}>
                                                    <option selected>Select Close Panna </option>
                                                    {
                                                        numberList?.close_ank?.map((item, index) => {
                                                            return (
                                                                <option value={item}>{item}</option>
                                                            )
                                                        })

                                                    }
                                                </select>
                                            </div>
                                            <div className='form-group col-md-3'>
                                                <input type="text" id="start" className='form-control' value={numberSum?.close} placeholder='Digit' />
                                            </div>
                                            {/* <div className='form-group col-md-2'>
                                                <button type="submit" class="btn btn-primary btn-block" id="srchBtn" name="srchBtn">Save</button>
                                            </div> */}
                                            <div className='form-group col-md-2'>
                                                <button type="submit" class="btn btn-danger btn-block" id="srchBtn" name="srchBtn" onClick={handleDeclaireResultClose}>Declare</button>
                                            </div>
                                        </div></>}
                            </div>
                            : null}
                    <div className='card p-3 flex align-center space-between'>
                        <h4 class="card-title text-left w-100">Game Result History</h4>
                        <div className='row w-100'>
                            <div className='form-group col-md-3'>
                                <label>Select Result Date</label>
                                <input type="date" id="start" className='form-control' />
                            </div>
                            <div className='form-group col-md-9'></div>
                        </div>
                    </div>

                    <div className='card p-3 flex align-center space-between'>
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
                                            <th>Game Name</th>
                                            <th>Result Date</th>
                                            <th>Open Declare Date</th>
                                            <th>Close Declare Date</th>
                                            <th>Open Pana</th>
                                            <th>Close Pana</th>

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
                                                        <td>{moment(item?.open_declare_date).format("ddd DD-MMM-YYYY, hh:mm A") || "NA"}</td>
                                                        <td>{moment(item?.close_declare_date ).format("ddd DD-MMM-YYYY, hh:mm A")|| "NA"}</td>
                                                        <td>{item?.open_pana_result || "NA"}
                                                        &nbsp;&nbsp;
                                                        <Button onClick={()=>{
                                                            handleDelete(item?.id,false)
                                                        }} style={{fontSize:"12px"}} className='btn btn-sm btn-danger'>Delete</Button>
                                                       
                                                        </td>
                                                        <td>{item?.close_pana_result || "NA"}
                                                        &nbsp;&nbsp;
                                                        <Button onClick={()=>{
                                                            handleDelete(item?.id,true)
                                                        }} style={{fontSize:"12px"}} className='btn btn-sm btn-danger'>Delete</Button>
                                                        </td>

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

export default Resultdeclare