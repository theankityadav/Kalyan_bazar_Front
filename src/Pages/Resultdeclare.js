import React, { useEffect, useState } from 'react'
import { Loader } from '../Common/Loader'
import { gameNameApi, getAddNumbers, getNumbers } from '../service/service'

const Resultdeclare = () => {
    const[data,setData]=useState([])
    const[loader,setLoader]=useState(false)
    const[selectsession,setSelectSession]=useState("0")
    const[numberSum,setNumberSum]=useState("")
    const[numberList,setNumberList]=useState([])
    const[showResultDeclare,setShowResultDeclare]=useState(false)

    useEffect(()=>{
        handleGetGameList()
        handleGetPanalist()
    },[])
    const handleGetGameList=()=>{
        gameNameApi("NORMAL").then((res)=>{
          
         setData(res?.data?.data)
        }).catch((err)=>{
            setLoader(false)
            console.log("err",err)
            alert(err?.response?.data?.message||"Internal server error")
        })
    }

    const handleGetPanalist =()=>{

            getNumbers("FULL_SANGAM").then((res)=>{
                setNumberList(res?.data?.data[0])
               
            }).catch((err)=>{
                console.log("error",err)
    
            })
    }

    const handleGetAddNumbers =(id,type)=>{
        setLoader(true)
        let key = type==="1"?"open":"close";
        getAddNumbers(id).then((res)=>{
           setNumberSum({...numberList,[key]:res?.data?.digit})
           setLoader(false)
        }).catch((err)=>{
            setLoader(false)
            console.log("error",err)

        })
    }
  return (
    <>
    {
        loader?<Loader/>:null
    }
     <div className="content-wrapper">
        <div className='container-fluid'>
            <div className='card p-3 flex align-center space-between mb-3'>
                <h4 class="card-title text-left w-100">Select Game</h4>
                <div className='row w-100'>
                    <div className='form-group col-md-3'>
                        <input type="date" id="start" className='form-control' />
                    </div>
                    <div className='form-group col-md-4'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Game Name</option>
                            {data?.map((item,index)=>{
                                return(
                                    <option key={index} value="1">{`${item?.name||""} (${item?.market_opening_time}-${item?.market_closing_time})`}</option>
                                )
                            })}
                          
                          
                        </select>
                    </div>
                    <div className='form-group col-md-3'>
                        <select class="form-select" value={selectsession} aria-label="Default select example"  onChange={(e)=>setSelectSession(e.target.value)}>
                            <option value="0" >Both Session</option>
                            <option value="1">open</option>
                            <option value="2">close</option>
                           
                        </select>
                    </div>
                    <div className='form-group col-md-2'>
                        <button type="submit" class="btn btn-primary btn-block" id="srchBtn" name="srchBtn" onClick={()=>{
                            setShowResultDeclare(true)
                            setNumberSum("")
                            setSelectSession("0")
                        }}>Go</button>
                    </div>
                </div>
            </div>
            {
                showResultDeclare?

            <div className='card p-3 flex align-center space-between mb-3'>
                <h4 class="card-title text-left w-100">Declare Result</h4>
                 { selectsession!=="0"?
                <div className='row w-100'>
                    <div className='form-group col-md-4'>
                        <select class="form-select" aria-label="Default select example" onChange={(e)=>{
                            handleGetAddNumbers(e.target.value,false)
                        }}>
                            <option selected>{"Select "+(selectsession==="1"?"Open":"Close") +  " Panna"}</option>
                           {
                               selectsession==="1"?numberList?.open_ank?.map((item,index)=>{
                                   return(
                                    <option value={item}>{item}</option>
                                   )
                               })
                               :numberList?.close_ank?.map((item,index)=>{
                                return(
                                 <option value={item}>{item}</option>
                                )
                            })
                           }
                        </select>
                    </div>
                    <div className='form-group col-md-3'>
                        <input type="text" id="start" className='form-control' value={numberSum?.close} placeholder='Digit' />
                    </div>
                    <div className='form-group col-md-2'>
                        <button type="submit" class="btn btn-primary btn-block" id="srchBtn" name="srchBtn">Save</button>
                    </div>
                    <div className='form-group col-md-2'>
                        <button type="submit" class="btn btn-primary btn-block" id="srchBtn" name="srchBtn">Declare</button>
                    </div>
                </div>:
                <>  <div className='row w-100'>
                    <div className='form-group col-md-4'>
                        <select class="form-select" aria-label="Default select example" onChange={(e)=>{
                            handleGetAddNumbers(e.target.value,"1")
                        }}>
                            <option selected>Select Open Panna</option>
                           {
                              numberList?.open_ank?.map((item,index)=>{
                                   return(
                                    <option value={item}>{item}</option>
                                   )
                               })
                              
                           }
                        </select>
                    </div>
                    <div className='form-group col-md-3'>
                        <input type="text" id="start" className='form-control' value={numberSum?.open} placeholder='Digit' />
                    </div>
                    <div className='form-group col-md-2'>
                        <button type="submit" class="btn btn-primary btn-block" id="srchBtn" name="srchBtn">Save</button>
                    </div>
                    <div className='form-group col-md-2'>
                        <button type="submit" class="btn btn-primary btn-block" id="srchBtn" name="srchBtn">Declare</button>
                    </div>
                </div>
                <br></br>
                <div className='row w-100'>
                    <div className='form-group col-md-4'>
                        <select class="form-select" aria-label="Default select example" onChange={(e)=>{
                            handleGetAddNumbers(e.target.value,"2")
                        }}>
                            <option selected>Select Close Panna </option>
                           {
                              numberList?.close_ank?.map((item,index)=>{
                                   return(
                                    <option value={item}>{item}</option>
                                   )
                               })
                               
                           }
                        </select>
                    </div>
                    <div className='form-group col-md-3'>
                        <input type="text" id="start" className='form-control'  value={numberSum?.close} placeholder='Digit' />
                    </div>
                    <div className='form-group col-md-2'>
                        <button type="submit" class="btn btn-primary btn-block" id="srchBtn" name="srchBtn">Save</button>
                    </div>
                    <div className='form-group col-md-2'>
                        <button type="submit" class="btn btn-primary btn-block" id="srchBtn" name="srchBtn">Declare</button>
                    </div>
                </div></> }
            </div>
           :null }
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
        </div>
     </div>
    </>
  )
}

export default Resultdeclare