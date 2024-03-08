import React, {useState, useEffect} from "react";
import dashboard from "../Assets/dashboard.jpg";
import { Loader } from '../Common/Loader';
import { gameNameApi, getPointCountMarket } from "../service/service";


const UpperCard = ({data}) => {
    const [daata, setDaata] = useState([])
    const [loader, setLoader] = useState(false)
    const [selectedGameName, setSelectedGameName] = useState("")
    const [marketId, setMarketId] = useState("")
    const [points, setPoints] = useState("")
    useEffect(()=>{
        handleGetGameList()
    },[])

    const handleGetGameList = () => {
        setLoader(true)
        gameNameApi("normal").then((res) => {
            setDaata(res?.data?.data)
            setLoader(false)
        }).catch((err) => {
            setLoader(false)
            console.log("err", err)
            alert(err?.response?.data?.message || "Internal server error")
        })
    }

    const handleGetPoints = () => {
        setLoader(true)
        getPointCountMarket(marketId).then((res) => {
            console.log(res?.data?.data, marketId, "ddddd");
            setPoints(res?.data?.data)
            setLoader(false)
        }).catch((err) => {
            setLoader(false)
            console.log("err", err)
            alert(err?.response?.data?.message || "Internal server error")
        })
    }

    const handleResponsePoints = (e) =>{
        setSelectedGameName(e.target.value.split("|")[0])
        setMarketId(e.target.value.split("|")[1])
    }
  return (
    <>
        {
                loader ? <Loader /> : null
            }
        <div className="row mb-3 card-height">
            <div className="col-xl-12 col-sm-12 mb-3">
				<div className="card">
					<img src={dashboard} className="card-img-top" alt="..." />
					<div className="card-body">
						<div className="row">
                            <div className="col-6">
                                <h5 className="card-title mb-0">{data?.un_approved_users} Unapproved Users</h5>
                            </div>
                            <div className="col-6">
                                <h5 className="card-title mb-0">{data?.approved_users} Approved Users</h5>
                            </div>
                        </div>
					</div>
				</div>
			</div>
            <div className="col-xl-12 col-sm-12 mb-3">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Market Bid Details</h5>
						<p className="card-text">Game Name</p>
                        <select className="form-select" aria-label="Default select example" value={selectedGameName+"|"+marketId} 
                                onChange={handleResponsePoints}>
                                    <option selected>Select Game Name</option>
                                    {daata?.map((item, index) => {
                                        return (
                                            <option key={index} value={item?.market_name + "|" + item?.id}>{`${item?.market_name || ""} (${item?.market_opening_time}-${item?.market_closing_time})`}</option>
                                        )
                                    })}
                        </select>
                        <h5 className="card-title mt-1">{points || "0"}</h5>
						<p className="card-text">{selectedGameName}</p>
                        <button className="btn btn-danger" onClick={() => handleGetPoints()}>Get Details</button>
					</div>
				</div>
			</div>
        </div>
    </>
  );
};

export default UpperCard;
