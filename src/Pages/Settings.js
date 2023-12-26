import React from 'react'

const Settings = () => {
  return (
    <>
    <div className="content-wrapper">
        <div class="container-fluid">
            <div class="row row_col" style={{marginTop:"30px"}}>
                <div class="col-sm-12 col-xl-6">
                    <div class="card h100p">
                        <div class="card-body">
                            <h4 class="card-title">Add UPI ID</h4>
                            <form class="theme-form mega-form" id="adminUPIFrm" name="adminUPIFrm" method="post">
                                <input type="hidden" name="account_id" value="1"/>
                                <div class="row">
                                    <div class="form-group col-12">
                                        <label class="col-form-label">UPI Payment Id</label>
                                        <input class="form-control" type="text" name="upi_payment_id" id="upi_payment_id" value="merchant482402.augp@aubank" placeholder="Enter upi payment id"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary waves-light m-t-10" id="upiSubmitBtn" name="upiSubmitBtn">Submit</button>
                                </div>
                                <div class="form-group">
                                    <div id="error_upi"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-xl-6">
                    <div class="card h100p">
                        <div class="card-body">
                            <h4 class="card-title">App Maintainence</h4>
                            <form class="theme-form mega-form" id="appMaintainenceFrm" name="appMaintainenceFrm" method="post">
                                <input type="hidden" name="value_id" value="1"/>
                                <div class="form-group">
                                    <label class="col-form-label">Withdrawl Message</label>
                                    <textarea class="form-control" name="app_maintainence_msg" rows="4" id="app_maintainence_msg">Our app is under maintenance. We will back to you very soon..</textarea>
                                </div>
                                <div class="form-group col-6" style={{marginTop:"30px"}}>
                                    <div class="media">
                                        <div class="custom-control custom-switch mb-3" dir="ltr">
                                            <input type="checkbox" class="custom-control-input" id="maintainence_msg_status" name="maintainence_msg_status" value="1"/>
                                            <label class="custom-control-label" for="maintainence_msg_status">Show Msg (ON/OFF)</label>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" name="value_id" value="1"/>
                                <div class="form-group">
                                    <label class="col-form-label">Add Fund Message</label>
                                    <textarea class="form-control" name="app_maintainence_msg" rows="4" id="app_maintainence_msg">Our app is under maintenance. We will back to you very soon..</textarea>
                                </div>
                                <div class="form-group col-6" style={{marginTop:"30px"}}>
                                    <div class="media">
                                        <div class="custom-control custom-switch mb-3" dir="ltr">
                                            <input type="checkbox" class="custom-control-input" id="maintainence_msg_status" name="maintainence_msg_status" value="1"/>
                                            <label class="custom-control-label" for="maintainence_msg_status">Show Msg (ON/OFF)</label>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" name="value_id" value="1"/>
                                <div class="form-group">
                                    <label class="col-form-label">Information Message</label>
                                    <textarea class="form-control" name="app_maintainence_msg" rows="4" id="app_maintainence_msg">Our app is under maintenance. We will back to you very soon..</textarea>
                                </div>
                                <div class="form-group col-6" style={{marginTop:"30px"}}>
                                    <div class="media">
                                        <div class="custom-control custom-switch mb-3" dir="ltr">
                                            <input type="checkbox" class="custom-control-input" id="maintainence_msg_status" name="maintainence_msg_status" value="1"/>
                                            <label class="custom-control-label" for="maintainence_msg_status">Show Msg (ON/OFF)</label>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" name="value_id" value="1"/>
                                <div class="form-group">
                                    <label class="col-form-label">Note Message</label>
                                    <textarea class="form-control" name="app_maintainence_msg" rows="4" id="app_maintainence_msg">Our app is under maintenance. We will back to you very soon..</textarea>
                                </div>
                                <div class="form-group col-6" style={{marginTop:"30px"}}>
                                    <div class="media">
                                        <div class="custom-control custom-switch mb-3" dir="ltr">
                                            <input type="checkbox" class="custom-control-input" id="maintainence_msg_status" name="maintainence_msg_status" value="1"/>
                                            <label class="custom-control-label" for="maintainence_msg_status">Show Msg (ON/OFF)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary waves-light m-t-10" id="submitBtnAppMaintainece" name="submitBtnAppMaintainece">Submit</button>
                                </div>
                                <div class="form-group">
                                    <div id="error_maintainence"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-xl-12" style={{margin:"30px 0px"}}>
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-xl-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Add Value's</h4>
                                    <form class="theme-form mega-form" id="adminvaluesettingFrm" name="adminvaluesettingFrm" method="post">
                                        <input type="hidden" name="value_id" value="1"/>
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label class="col-form-label">Minimum Deposite</label>
                                            <input class="form-control" type="number" min="0" name="min_deposite" id="min_deposite" value="300" placeholder="Enter Min. Deposite Amount"/>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="col-form-label">Maximum Deposite</label>
                                            <input class="form-control" type="number" min="0" name="max_deposite" id="max_deposite" value="100000" placeholder="Enter Max Deposite Amount"/>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="col-form-label">Minimum Withdrawal</label>
                                            <input class="form-control" type="number" min="0" name="min_withdrawal" id="min_withdrawal" value="1000" placeholder="Enter Min Withdrawal Amount"/>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="col-form-label">Maximum Withdrawal</label>
                                            <input class="form-control" type="number" min="0" name="max_withdrawal" id="max_withdrawal" value="1000" placeholder="Enter Max Withdrawal Amount"/>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="col-form-label">Minimum Transfer</label>
                                            <input class="form-control" type="number" min="0" name="min_transfer" id="min_transfer" value="100" placeholder="Enter Min Transfer Amount"/>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="col-form-label">Maximum Transfer</label>
                                            <input class="form-control" type="number" min="0" name="max_transfer" id="max_transfer" value="100" placeholder="Enter Max Transfer Amount"/>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="col-form-label">Minimum Bid Amount</label>
                                            <input class="form-control" type="number" min="0" name="min_bid_amt" id="min_bid_amt" value="10" placeholder="Enter Min Bid Amount"/>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="col-form-label">Maximum Bid Amount</label>
                                            <input class="form-control" type="number" min="0" name="max_bid_amt" id="max_bid_amt" value="100000" placeholder="Enter Max Bid Amount"/>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="col-form-label">Welcome Bonus</label>
                                            <input class="form-control" type="number" min="0" name="welcome_bonus" id="welcome_bonus" value="5" placeholder="Enter Welcome Bonus Amount"/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-2">
                                                    <label for="open_time">Withdraw Open Time</label>

                                                    <input name="withdraw_open_time" id="withdraw_open_time" class="form-control digits" value="08:00" type="time"/>
                                                    
                                        </div>
                                        <div class="form-group col-2">
                                                    <label for="close_time">Withdraw Close Time</label>
                                                    <input name="withdraw_close_time" id="withdraw_close_time" class="form-control digits" type="time" value="22:00"/>
                                                    
                                        </div>
                                        <div class="form-group col-2" style={{marginTop:"30px"}}>
                                                    
                                                    <div class="media">
                                                    
                                                    <div class="custom-control custom-switch mb-3" dir="ltr">
                                                        <input type="checkbox" class="custom-control-input" id="global_batting_status" name="global_batting_status" checked="" value="1"/>
                                                        <label class="custom-control-label" for="global_batting_status">Global Batting</label>
                                                    </div>
                                                
                                                </div>
                                                    
                                                    
                                    </div>
                                    </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary waves-light m-t-10" id="submitValueBtn" name="submitValueBtn">Submit</button>
                                        </div>
                                        <div class="form-group">
                                            <div id="alert"></div>
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

export default Settings