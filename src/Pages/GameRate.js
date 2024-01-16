import React, { useEffect, useState } from 'react'
import { gameRate } from '../service/service'

const GameRate = () => {
    
const[data,setData]=useState()
    useEffect(()=>{
        hanldeGetGameRate()
    },[])

    const hanldeGetGameRate =()=>{
        gameRate().then((res)=>{
            setData(res?.data?.data[0])
            console.log("res",res?.data?.data[0])
        }).catch((err)=>{
            console.log('error',err)
        })
    }
  return (
    <>
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-lg-8 mr-auto ml-auto">
                    <div class="row">
                        <div class="col-sm-12 col-12 ">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Add Games Rate</h4>
                                    <form class="theme-form mega-form" id="gameRatesFrm" name="gameRatesFrm" method="post">
                                        <input type="hidden" name="game_rate_id" value={data?.single_digit_value_1} />
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label">Single Digit Value 1</label>
                                            <input class="form-control" type="number" name="single_digit_1" id="single_digit_1" value={data?.single_digit_value_1} placeholder="Enter Single Digit Value"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label">Single Digit Value 2</label>
                                            <input class="form-control" type="number" name="single_digit_2" id="single_digit_2" value={data?.single_digit_value_2} placeholder="Enter Single Digit Value"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label">Jodi Digit Value 1</label>
                                            <input class="form-control" type="number" name="jodi_digit_1" id="jodi_digit_1" value={data?.jodi_digit_value_1} placeholder="Enter Jodi Digit Value"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label">Jodi Digit Value 2</label>
                                            <input class="form-control" type="number" name="jodi_digit_2" id="jodi_digit_2" value={data?.jodi_digit_value_2} placeholder="Enter Jodi Digit Value"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label">Single Pana Value 1</label>
                                            <input class="form-control" type="number" name="single_pana_1" id="single_pana_1" value={data?.single_pana_value_1} placeholder="Enter Single Pana Value"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label">Single Pana Value 2</label>
                                            <input class="form-control" type="number" name="single_pana_2" id="single_pana_2" value={data?.single_pana_value_2} placeholder="Enter Single Pana Value"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label">Double Pana Value 1</label>
                                            <input class="form-control" type="number" name="double_pana_1" id="double_pana_1" value={data?.double_pana_value_1} placeholder="Enter Double Pana Value"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label">Double Pana Value 2</label>
                                            <input class="form-control" type="number" name="double_pana_2" id="double_pana_2" value={data?.double_pana_value_2} placeholder="Enter Double Pana Value"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label">Tripple Pana Value 1</label>
                                            <input class="form-control" type="number" name="tripple_pana_1" id="tripple_pana_1" value={data?.triple_pana_value_1} placeholder="Enter Tripple Pana Value"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label">Tripple Pana Value 2</label>
                                            <input class="form-control" type="number" name="tripple_pana_2" id="tripple_pana_2" value={data?.triple_pana_value_2} placeholder="Enter Tripple Pana Value"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label">Half Sangam Value 1</label>
                                            <input class="form-control" type="number" name="half_sangam_1" id="half_sangam_1" value={data?.half_sangam_value_1} placeholder="Enter Half Sangam Value"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label">Half Sangam Value 2</label>
                                            <input class="form-control" type="number" name="half_sangam_2" id="half_sangam_2" value={data?.half_sangam_value_2} placeholder="Enter Half Sangam Value"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label">Full Sangam Value 1</label>
                                            <input class="form-control" type="number" name="full_sangam_1" id="full_sangam_1" value={data?.full_sangam_value_1} placeholder="Enter Full Sangam Value"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label">Full Sangam Value 2</label>
                                            <input class="form-control" type="number" name="full_sangam_2" id="full_sangam_2" value={data?.full_sangam_value_2} placeholder="Enter Full Sangam Value"/>
                                        </div>
                                                                        </div>	
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-danger waves-light m-t-10" id="submitBtn" name="buysubmitBtn">Submit</button>
                                        </div>
                                        <div class="form-group">
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