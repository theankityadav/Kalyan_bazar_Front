import React, { useEffect, useState } from 'react'
import { gameRate, updateGameRate } from '../service/service'

const GameRate = () => {
    
    const[data,setData]=useState()
    const[single_digit_value_2,setSingleDigit]=useState()
    const[jodi_digit_value_2,setJodiDigit]=useState()
    const[single_pana_value_2,setSinglePana]=useState()
    const[double_pana_value_2,setDoublePana]=useState()
    const[triple_pana_value_2,setTriplePana]=useState()
    const[half_sangam_value_2,setHalfSangam]=useState()
    const[full_sangam_value_2,setFullSangam]=useState()
    useEffect(()=>{
        hanldeGetGameRate()
    },[])

    const hanldeGetGameRate =()=>{
        gameRate().then((res)=>{
            setData(res?.data?.data[0])
            setSingleDigit(res?.data?.data[0]?.single_digit_value_2)
            setJodiDigit(res?.data?.data[0]?.jodi_digit_value_2)
            setSinglePana(res?.data?.data[0]?.single_pana_value_2)
            setDoublePana(res?.data?.data[0]?.double_pana_value_2)
            setTriplePana(res?.data?.data[0]?.triple_pana_value_2)
            setHalfSangam(res?.data?.data[0]?.half_sangam_value_2)
            setFullSangam(res?.data?.data[0]?.full_sangam_value_2)
            console.log("res",res?.data?.data[0])
        }).catch((err)=>{
            console.log('error',err)
        })
    }
    const hanldeUpdateGameRate = () => {
        let reqBody = {
            "id": 1,
            "game_type": "NORMAL",
            "single_digit_value_1": 10,
            "single_digit_value_2": Number(single_digit_value_2),
            "jodi_digit_value_1": 10,
            "jodi_digit_value_2": Number(jodi_digit_value_2),
            "single_pana_value_1": 10,
            "single_pana_value_2": Number(single_pana_value_2),
            "double_pana_value_1": 10,
            "double_pana_value_2": Number(double_pana_value_2),
            "triple_pana_value_1": 10,
            "triple_pana_value_2": Number(triple_pana_value_2),
            "half_sangam_value_1": 10,
            "half_sangam_value_2": Number(half_sangam_value_2),
            "full_sangam_value_1": 10,
            "full_sangam_value_2": Number(full_sangam_value_2)
        }
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
                                    
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label">Single Digit Value 1</label>
                                            <input className="form-control" type="number" name="single_digit_1" id="single_digit_1" value={data?.single_digit_value_1} placeholder="Enter Single Digit Value"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label">Single Digit Value 2</label>
                                            <input className="form-control" type="number" name="single_digit_2" id="single_digit_2" value={single_digit_value_2} onChange={(e) => setSingleDigit(e.target.value)} placeholder="Enter Single Digit Value"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label">Jodi Digit Value 1</label>
                                            <input className="form-control" type="number" name="jodi_digit_1" id="jodi_digit_1" value={data?.jodi_digit_value_1} placeholder="Enter Jodi Digit Value"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label">Jodi Digit Value 2</label>
                                            <input className="form-control" type="number" name="jodi_digit_2" id="jodi_digit_2" value={jodi_digit_value_2} onChange={(e) => setJodiDigit(e.target.value)} placeholder="Enter Jodi Digit Value"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label">Single Pana Value 1</label>
                                            <input className="form-control" type="number" name="single_pana_1" id="single_pana_1" value={data?.single_pana_value_1} placeholder="Enter Single Pana Value"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label">Single Pana Value 2</label>
                                            <input className="form-control" type="number" name="single_pana_2" id="single_pana_2" value={single_pana_value_2} onChange={(e) => setSinglePana(e.target.value)} placeholder="Enter Single Pana Value"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label">Double Pana Value 1</label>
                                            <input className="form-control" type="number" name="double_pana_1" id="double_pana_1" value={data?.double_pana_value_1} placeholder="Enter Double Pana Value"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label">Double Pana Value 2</label>
                                            <input className="form-control" type="number" name="double_pana_2" id="double_pana_2" value={double_pana_value_2} onChange={(e) => setDoublePana(e.target.value)} placeholder="Enter Double Pana Value"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label">Tripple Pana Value 1</label>
                                            <input className="form-control" type="number" name="tripple_pana_1" id="tripple_pana_1" value={data?.triple_pana_value_1} placeholder="Enter Tripple Pana Value"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label">Tripple Pana Value 2</label>
                                            <input className="form-control" type="number" name="tripple_pana_2" id="tripple_pana_2" value={triple_pana_value_2} onChange={(e) => setTriplePana(e.target.value)} placeholder="Enter Tripple Pana Value"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label">Half Sangam Value 1</label>
                                            <input className="form-control" type="number" name="half_sangam_1" id="half_sangam_1" value={data?.half_sangam_value_1} placeholder="Enter Half Sangam Value"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label">Half Sangam Value 2</label>
                                            <input className="form-control" type="number" name="half_sangam_2" id="half_sangam_2" value={half_sangam_value_2} onChange={(e) => setHalfSangam(e.target.value)} placeholder="Enter Half Sangam Value"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label">Full Sangam Value 1</label>
                                            <input className="form-control" type="number" name="full_sangam_1" id="full_sangam_1" value={data?.full_sangam_value_1} placeholder="Enter Full Sangam Value"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label">Full Sangam Value 2</label>
                                            <input className="form-control" type="number" name="full_sangam_2" id="full_sangam_2" value={full_sangam_value_2} onChange={(e) => setFullSangam(e.target.value)} placeholder="Enter Full Sangam Value"/>
                                        </div>
                                                                        </div>	
                                        <div className="form-group">
                                            <button className="btn btn-danger waves-light m-t-10" onClick={()=>{
                                                        hanldeUpdateGameRate()
                                            }}>Submit</button>
                                        </div>
                                        <div className="form-group">
                                            <div id="error"></div>
                                        </div>
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