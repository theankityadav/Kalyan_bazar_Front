import React, {useState, useEffect} from 'react'
import { gameNameApi, getDashboardAnk } from '../service/service'
import { Loader } from '../Common/Loader'

const SecondRightCard = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [selectedGameName, setSelectedGameName] = useState("")
    const [marketId, setMarketId] = useState("")
    const [marketType, setMarketType] = useState("open")
    const [ankNumber, setAnkNumber] = useState("")

    useEffect(()=>{
        handleGetGameList()
    },[])
    
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
   
    const handleGetAnk = () => {
        setLoader(true)
        getDashboardAnk(marketId, marketType).then((res) => {
            setAnkNumber(res?.data?.data)
            console.log(res?.data?.data, "ress");
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
        <div className='row mb-1'>
            <div className="col-xl-12 col-sm-12 mb-3">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Total Bids On Single Ank Of Date 22 Jul 2023</h5>
						<div className='row align-items-end'>
                            <div className='form-group col-md-5'>
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
                                <select className="form-select" value={marketType} aria-label="Default select example" onChange={(e) => setMarketType(e.target.value)}>
                                    <option value="0" >Both Session</option>
                                    <option value="open">open</option>
                                    <option value="">close</option>
                                </select>
                            </div>
                            <div className='col-xl-2 col-sm-6 mb-3'>
                                <button href="#" className="btn btn-danger" onClick={handleGetAnk}>Get</button>
                            </div>
                        </div>
					</div>
				</div>
			</div>
        </div>
        <div className="row">
            <div className="col-md-20 mb-3">
            <div className="card text-center text-white bg-danger o-hidden h-100">
                <div className="card-body card-body-p">
                <div className="card-body-icon-small">
                    <i className="fa fa-handshake-o"></i>
                </div>
                <div className="m-auto">
                    <h5>Total Bids <span id="bid0">{ankNumber?.zero_ank_count}</span></h5>
                    <h4 id="total0">{ankNumber?.zero_ank_bid_rs || "0"}</h4>
                </div>
                </div>
                <div className="text-white clearfix small z-1 text-center" href="#">
                    Ank <span>0</span>
                </div>
            </div>
            </div>
            <div className="col-md-20 mb-3">
            <div className="card text-center text-white bg-danger o-hidden h-100">
                <div className="card-body card-body-p">
                <div className="card-body-icon-small">
                    <i className="fa fa-handshake-o"></i>
                </div>
                <div className="m-auto">
                    <h5>Total Bids <span id="bid0">{ankNumber?.one_ank_count}</span></h5>
                    <h4 id="total0">{ankNumber?.one_ank_bid_rs || "0"}</h4>
                </div>
                </div>
                <div className="text-white clearfix small z-1 text-center" href="#">
                    Ank <span>1</span>
                </div>
            </div>
            </div>
            <div className="col-md-20 mb-3">
            <div className="card text-center text-white bg-danger o-hidden h-100">
                <div className="card-body card-body-p">
                <div className="card-body-icon-small">
                    <i className="fa fa-handshake-o"></i>
                </div>
                <div className="m-auto">
                    <h5>Total Bids <span id="bid0">{ankNumber?.two_ank_count}</span></h5>
                    <h4 id="total0">{ankNumber?.two_ank_bid_rs || "0"}</h4>
                </div>
                </div>
                <div className="text-white clearfix small z-1 text-center" href="#">
                    Ank <span>2</span>
                </div>
            </div>
            </div>
            <div className="col-md-20 mb-3">
            <div className="card text-center text-white bg-danger o-hidden h-100">
                <div className="card-body card-body-p">
                <div className="card-body-icon-small">
                    <i className="fa fa-handshake-o"></i>
                </div>
                <div className="m-auto">
                    <h5>Total Bids <span id="bid0">{ankNumber?.three_ank_count}</span></h5>
                    <h4 id="total0">{ankNumber?.three_ank_bid_rs || "0"}</h4>
                </div>
                </div>
                <div className="text-white clearfix small z-1 text-center" href="#">
                    Ank <span>3</span>
                </div>
            </div>
            </div>
            <div className="col-md-20 mb-3">
            <div className="card text-center text-white bg-danger o-hidden h-100">
                <div className="card-body card-body-p">
                <div className="card-body-icon-small">
                    <i className="fa fa-handshake-o"></i>
                </div>
                <div className="m-auto">
                    <h5>Total Bids <span id="bid0">{ankNumber?.four_ank_count}</span></h5>
                    <h4 id="total0">{ankNumber?.four_ank_bid_rs || "0"}</h4>
                </div>
                </div>
                <div className="text-white clearfix small z-1 text-center" href="#">
                    Ank <span>4</span>
                </div>
            </div>
            </div>
            <div className="col-md-20 mb-3">
            <div className="card text-center text-white bg-danger o-hidden h-100">
                <div className="card-body card-body-p">
                <div className="card-body-icon-small">
                    <i className="fa fa-handshake-o"></i>
                </div>
                <div className="m-auto">
                    <h5>Total Bids <span id="bid0">{ankNumber?.five_ank_count}</span></h5>
                    <h4 id="total0">{ankNumber?.five_ank_bid_rs || "0"}</h4>
                </div>
                </div>
                <div className="text-white clearfix small z-1 text-center" href="#">
                    Ank <span>5</span>
                </div>
            </div>
            </div>
            <div className="col-md-20 mb-3">
            <div className="card text-center text-white bg-danger o-hidden h-100">
                <div className="card-body card-body-p">
                <div className="card-body-icon-small">
                    <i className="fa fa-handshake-o"></i>
                </div>
                <div className="m-auto">
                    <h5>Total Bids <span id="bid0">{ankNumber?.six_ank_count}</span></h5>
                    <h4 id="total0">{ankNumber?.six_ank_bid_rs || "0"}</h4>
                </div>
                </div>
                <div className="text-white clearfix small z-1 text-center" href="#">
                    Ank <span>6</span>
                </div>
            </div>
            </div>
            <div className="col-md-20 mb-3">
            <div className="card text-center text-white bg-danger o-hidden h-100">
                <div className="card-body card-body-p">
                <div className="card-body-icon-small">
                    <i className="fa fa-handshake-o"></i>
                </div>
                <div className="m-auto">
                    <h5>Total Bids <span id="bid0">{ankNumber?.seven_ank_count}</span></h5>
                    <h4 id="total0">{ankNumber?.seven_ank_bid_rs || "0"}</h4>
                </div>
                </div>
                <div className="text-white clearfix small z-1 text-center" href="#">
                    Ank <span>7</span>
                </div>
            </div>
            </div>
            <div className="col-md-20 mb-3">
            <div className="card text-center text-white bg-danger o-hidden h-100">
                <div className="card-body card-body-p">
                <div className="card-body-icon-small">
                    <i className="fa fa-handshake-o"></i>
                </div>
                <div className="m-auto">
                    <h5>Total Bids <span id="bid0">{ankNumber?.eight_ank_count}</span></h5>
                    <h4 id="total0">{ankNumber?.eight_ank_bid_rs || "0"}</h4>
                </div>
                </div>
                <div className="text-white clearfix small z-1 text-center" href="#">
                    Ank <span>8</span>
                </div>
            </div>
            </div>
            <div className="col-md-20 mb-3">
            <div className="card text-center text-white bg-danger o-hidden h-100">
                <div className="card-body card-body-p">
                <div className="card-body-icon-small">
                    <i className="fa fa-handshake-o"></i>
                </div>
                <div className="m-auto">
                    <h5>Total Bids <span id="bid0">{ankNumber?.nine_ank_count}</span></h5>
                    <h4 id="total0">{ankNumber?.nine_ank_bid_rs || "0"}</h4>
                </div>
                </div>
                <div className="text-white clearfix small z-1 text-center" href="#">
                    Ank <span>9</span>
                </div>
            </div>
            </div>
      </div>
    </>
  )
}

export default SecondRightCard