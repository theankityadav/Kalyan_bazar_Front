import React, { useState, useEffect } from 'react'
import { gameRateStarline, updateGameRate } from '../../service/service';

const GameRate = () => {
    const[data,setData]=useState()
    const[single_digit_value_2,setSingleDigit]=useState()
    const[single_pana_value_2,setSinglePana]=useState()
    const[double_pana_value_2,setDoublePana]=useState()
    const[triple_pana_value_2,setTriplePana]=useState()

    useEffect(()=>{
        hanldeGetGameRate()
    },[])

    const hanldeGetGameRate =()=>{
        gameRateStarline().then((res)=>{
            setData(res?.data?.data[0])
            setSingleDigit(res?.data?.data[0]?.single_digit_value_2)
            setSinglePana(res?.data?.data[0]?.single_pana_value_2)
            setDoublePana(res?.data?.data[0]?.double_pana_value_2)
            setTriplePana(res?.data?.data[0]?.triple_pana_value_2)
        }).catch((err)=>{
            console.log('error',err)
        })
    }

    const hanldeUpdateGameRate = () => {
        let reqBody = {
            "id": 2,
            "game_type": "STARLINE",
            "single_digit_value_1": 10,
            "single_digit_value_2": Number(single_digit_value_2),
            "jodi_digit_value_1": 10,
            "jodi_digit_value_2": 950,
            "single_pana_value_1": 10,
            "single_pana_value_2": Number(single_pana_value_2),
            "double_pana_value_1": 10,
            "double_pana_value_2": Number(double_pana_value_2),
            "triple_pana_value_1": 10,
            "triple_pana_value_2": Number(triple_pana_value_2),
            "half_sangam_value_1": 10,
            "half_sangam_value_2": 10000,
            "full_sangam_value_1": 10,
            "full_sangam_value_2": 100000
        };
        updateGameRate(reqBody)
          .then((res) => {
            console.log("Rate Update Successfully");
          })
          .catch((err) => {
            alert("something went wrong");
            console.log("error", err);
          });
    };

    return (
        <>
            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-8 mr-auto ml-auto">
                            <div className="row">
                                <div className="col-sm-12 col-12 ">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Add Games Rate</h4>
                                            <form className="theme-form mega-form" id="gameRatesFrm" name="gameRatesFrm" method="post">
                                                <input type="hidden" name="game_rate_id" value="1" />
                                                <div className="row">
                                                    <div className="form-group col-md-6">
                                                        <label className="col-form-label">Single Digit Value 1</label>
                                                        <input className="form-control" type="number" name="single_digit_1" id="single_digit_1" value={data?.single_digit_value_1} placeholder="Enter Single Digit Value" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label className="col-form-label">Single Digit Value 2</label>
                                                        <input className="form-control" type="number" name="single_digit_2" id="single_digit_2" onChange={(e) => setSingleDigit(e.target.value)} value={single_digit_value_2} placeholder="Enter Single Digit Value" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label className="col-form-label">Single Pana Value 1</label>
                                                        <input className="form-control" type="number" name="double_pana_1" id="double_pana_1" value={data?.single_pana_value_1} placeholder="Enter Double Pana Value" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label className="col-form-label">Single Pana Value 2</label>
                                                        <input className="form-control" type="number" name="double_pana_2" id="double_pana_2" onChange={(e) => setSinglePana(e.target.value)} value={single_pana_value_2} placeholder="Enter Double Pana Value" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label className="col-form-label">Double Pana Value 1</label>
                                                        <input className="form-control" type="number" name="jodi_digit_1" id="jodi_digit_1" value={data?.double_pana_value_1} placeholder="Enter Jodi Digit Value" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label className="col-form-label">Double Pana Value 2</label>
                                                        <input className="form-control" type="number" name="jodi_digit_2" id="jodi_digit_2" onChange={(e) => setDoublePana(e.target.value)} value={double_pana_value_2} placeholder="Enter Jodi Digit Value" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label className="col-form-label">Tripple Pana Value 1</label>
                                                        <input className="form-control" type="number" name="single_pana_1" id="single_pana_1" value={data?.triple_pana_value_1} placeholder="Enter Tripple Pana Value" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label className="col-form-label">Tripple Pana Value 2</label>
                                                        <input className="form-control" type="number" name="single_pana_2" id="single_pana_2" onChange={(e) => setTriplePana(e.target.value)} value={triple_pana_value_2} placeholder="Enter Tripple Pana Value" />
                                                    </div>


                                                </div>
                                                <div className="form-group">
                                                    <button type="button" className="btn btn-primary waves-light m-t-10" id="submitBtn" name="buysubmitBtn" onClick={()=>{
                                                        hanldeUpdateGameRate()
                                                    }}>Submit</button>
                                                </div>
                                                <div className="form-group">
                                                    <div id="error"></div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameRate