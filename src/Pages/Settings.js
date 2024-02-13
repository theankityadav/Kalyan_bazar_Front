import React, { useEffect, useState } from 'react'
import { getAppSetting, getUrl, getSettingInformation, updateAppSettings, updateInformation, updateUpiId } from '../service/service'
import { Loader } from '../Common/Loader';

const Settings = () => {
    const [upiId, setUpiId] = useState()
    const [apiLink, setAppLink] = useState("")
    const [support_number, setSupportLInk] = useState()
    const [data, setData] = useState({})
    const [loader, setLoader] = useState(false)
    const [infoData, setInfoData] = useState([])
   

    const [infoId, setInfoId] = useState("")

    useEffect(() => {
        handlegetInformation()
        handlegetInformationSetting()
        handleGetUrl("get-url")
        handleGetUrl("get-contact-us")
    }, [])

    const handlegetInformation = () => {
        setLoader(true)
        getAppSetting().then((res) => {
            console.log("res", res?.data)
            setUpiId(res?.data?.data[0]?.upi_address)
            setData(res?.data?.data[0])

            setLoader(false)
        }).catch((err) => {
            console.log("err", err)
            setLoader(false)
        })
    }
    const handlegetInformationSetting = () => {
        setLoader(true)
        getSettingInformation().then((res) => {
            console.log("resInfo", res?.data?.data)
            setInfoId(res?.data?.data[0]?.id)

            setInfoData(res?.data?.data[0]?.information)

            setLoader(false)
        }).catch((err) => {
            console.log("err", err)
            setLoader(false)
        })
    }

    const handleGetUrl = (type) => {

        setLoader(true)
        getUrl(type).then((res) => {
            console.log("resData", res?.data)
            if (type === "get-url") {
                setAppLink(res?.data?.data[0]?.url)
            }
            else {
                setSupportLInk(res?.data?.data?.phone_number)
            }
            setLoader(false)

        }).catch((err) => {
            setLoader(false)
            console.log("err", err)
        })

    }
    const handleSubmit = (e, data, type) => {

        e.preventDefault()
        setLoader(true)
        let reqBody = data;
        updateUpiId(reqBody, type).then((res) => {
            setLoader(false)
            handleGetUrl()
            alert("Success")
        }).catch((err) => {
            setLoader(false)
            console.log("err", err)
        })

    }
    const hanldeChange = (e) => {
      if(e.target.name==="global_betting"){
        setData({ ...data, [e.target.name]: e.target.checked })
        return;
      }
        const { value, name } = e.target;
        setData({ ...data, [name]: value })

    }
    const handleUpdateAppSetting = (e) => {
        e.preventDefault()
        setLoader(true)
        let reqBody = data
        updateAppSettings(reqBody).then((res) => {
            setLoader(false)
            alert("Success")
        }).catch((err) => {
            setLoader(false)
            console.log("err", err)
        })

    }
    const [checkboxInput, setCheckboxInput] = useState({ maintainence_msg_status: false })
    const handleCheckbox = (e) => {
        alert("ll")
        const { name } = e.target;
        setCheckboxInput({ ...checkboxInput, [name]: !checkboxInput[name] })
        console.log("name", name)

    }

    const handleUpdateInformation = () => {
        setLoader(true)
        let reqBody = {
            information: infoData,
            is_shown: true,
            id: infoId
        }
        updateInformation(reqBody).then((res) => {
            setLoader(false)
            console.log("res", res)
            handlegetInformationSetting()
            handlegetInformation()

        }).catch((err) => {
            setLoader(false)
            console.log("err", err)
        })
    }
    const handleEditMessage = (e) => {
        const { name, value } = e.target
        setInfoData((prevInfoData) => ({
            ...prevInfoData,
            [name]: {
                ...prevInfoData[name],
                message: value,
            },
        }));
    };
    const handleEditStatus = (e) => {
        const { name, checked } = e.target
        setInfoData((prevInfoData) => ({
            ...prevInfoData,
            [name]: {
                ...prevInfoData[name],
                status: checked,
            },
        }));
    };

    console.log("form", infoData)
    return (
        <>
            {loader ? <Loader /> : null}
            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="row row_col" style={{ marginTop: "30px" }}>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card h100p mb-4">
                                <div className="card-body">
                                    <h4 className="card-title">Add Merchant Account Id</h4>
                                    <form className="theme-form mega-form" id="adminUPIFrm" name="adminUPIFrm" >
                                        <input type="hidden" name="account_id" value="1" />
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <label className="col-form-label">Merchant Id</label>
                                                <input className="form-control" type="text" onChange={(e) => setUpiId(e.target.value)} name="upi_payment_id" id="upi_payment_id" value={upiId} placeholder="Enter upi payment id" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" onClick={(e) => {
                                                handleSubmit(e, { id: data?.id, upi_address: upiId }, "update-upi")
                                            }} className="btn btn-danger waves-light m-t-10" id="upiSubmitBtn" name="upiSubmitBtn">Submit</button>
                                        </div>
                                        <div className="form-group">
                                            <div id="error_upi"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card h100p mb-4">
                                <div className="card-body">
                                    <h4 className="card-title">Add Support Number</h4>
                                    <form className="theme-form mega-form" id="adminUPIFrm" name="adminUPIFrm" >
                                        <input type="hidden" name="account_id" value="1" />
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <label className="col-form-label">Support No</label>
                                                <input className="form-control" type="text" onChange={(e) => setSupportLInk(e.target.value.slice(0, 10))} name="upi_payment_id" id="upi_payment_id" value={support_number} placeholder="Enter upi payment id" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" onClick={(e) => {
                                                handleSubmit(e, { phone_number: support_number }, "add-contact-us")
                                            }} className="btn btn-danger waves-light m-t-10" id="upiSubmitBtn" name="upiSubmitBtn">Submit</button>
                                        </div>
                                        <div className="form-group">
                                            <div id="error_upi"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card h100p mb-4">
                                <div className="card-body">
                                    <h4 className="card-title">Apk Link</h4>
                                    <form className="theme-form mega-form" id="adminUPIFrm" name="adminUPIFrm" >
                                        <input type="hidden" name="account_id" value="1" />
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <label className="col-form-label">Link</label>
                                                <input className="form-control" type="text" onChange={(e) => setAppLink(e.target.value)} name="upi_payment_id" id="upi_payment_id" value={apiLink} placeholder="Enter upi payment id" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" onClick={(e) => {
                                                handleSubmit(e, { url: apiLink }, "add-url")
                                            }} className="btn btn-danger waves-light m-t-10" id="upiSubmitBtn" name="upiSubmitBtn">Submit</button>
                                        </div>
                                        <div className="form-group">
                                            <div id="error_upi"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card h100p">
                                <div className="card-body">
                                    <h4 className="card-title">Add message</h4>
                                    <form className="theme-form mega-form" id="appMaintainenceFrm" name="appMaintainenceFrm" >

                                        <div>
                                            <input type="hidden" name="value_id" value="1" />
                                            <div className="form-group">
                                                <label className="col-form-label">Add fund message</label>
                                                <textarea className="form-control" name="add_fund_message" rows="4" id="app_maintainence_msg" value={infoData?.add_fund_message?.message} onChange={handleEditMessage} />
                                            </div>
                                            <div className="form-group col-6" style={{ marginTop: "30px" }}>
                                                <div className="media">
                                                    <div className="custom-control custom-switch mb-3" dir="ltr">
                                                        <input type="checkbox" className="custom-control-input" name="add_fund_message" checked={infoData?.add_fund_message?.status} onChange={handleEditStatus} />
                                                        <label className="custom-control-label" for="maintainence_msg_status">Show Msg (ON/OFF)</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>


                                            <input type="hidden" name="value_id" value="1" />
                                            <div className="form-group">
                                                <label className="col-form-label">App maintanence</label>
                                                <textarea className="form-control" name="app_maintanence" rows="4" id="app_maintainence_msg" value={infoData?.app_maintanence?.message} onChange={handleEditMessage} />
                                            </div>
                                            <div className="form-group col-6" style={{ marginTop: "30px" }}>
                                                <div className="media">
                                                    <div className="custom-control custom-switch mb-3" dir="ltr">
                                                        <input type="checkbox" className="custom-control-input" name="app_maintanence" checked={infoData?.app_maintanence?.status} onChange={handleEditStatus} />
                                                        <label className="custom-control-label" for="maintainence_msg_status">Show Msg (ON/OFF)</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>


                                            <input type="hidden" name="value_id" value="1" />
                                            <div className="form-group">
                                                <label className="col-form-label">withdrawl message</label>
                                                <textarea className="form-control" name="withdrawl_message" rows="4" id="app_maintainence_msg" value={infoData?.withdrawl_message?.message} onChange={handleEditMessage} />
                                            </div>
                                            <div className="form-group col-6" style={{ marginTop: "30px" }}>
                                                <div className="media">
                                                    <div className="custom-control custom-switch mb-3" dir="ltr">
                                                        <input type="checkbox" className="custom-control-input" name="withdrawl_message" checked={infoData?.withdrawl_message?.status} onChange={handleEditStatus} />
                                                        <label className="custom-control-label" for="maintainence_msg_status">Show Msg (ON/OFF)</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>


                                            <input type="hidden" name="value_id" value="1" />
                                            <div className="form-group">
                                                <label className="col-form-label">pop up message</label>
                                                <textarea className="form-control" name="pop_up_message" rows="4" id="app_maintainence_msg" value={infoData?.pop_up_message?.message} onChange={handleEditMessage} />
                                            </div>
                                            <div className="form-group col-6" style={{ marginTop: "30px" }}>
                                                <div className="media">
                                                    <div className="custom-control custom-switch mb-3" dir="ltr">
                                                        <input type="checkbox" className="custom-control-input" name="pop_up_message" checked={infoData?.pop_up_message?.status} onChange={handleEditStatus} />
                                                        <label className="custom-control-label" for="maintainence_msg_status">Show Msg (ON/OFF)</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>







                                        <div className="form-group">
                                            <button type="submit" className="btn btn-danger waves-light m-t-10" id="submitBtnAppMaintainece" name="submitBtnAppMaintainece" onClick={(e) => {
                                                e.preventDefault()
                                                handleUpdateInformation()
                                            }}>Submit</button>
                                        </div>
                                        <div className="form-group">
                                            <div id="error_maintainence"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-xl-12" style={{ margin: "30px 0px" }}>
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-xl-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Add Value's</h4>
                                            <form className="theme-form mega-form" id="adminvaluesettingFrm" name="adminvaluesettingFrm" >
                                                <input type="hidden" name="value_id" value="1" />
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <label className="col-form-label">Minimum Deposite</label>
                                                        <input className="form-control" value={data?.min_deposit} name="min_deposit" type="number" onChange={hanldeChange} min="0" id="min_deposite" placeholder="Enter Min. Deposite Amount" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label className="col-form-label">Maximum Deposite</label>
                                                        <input className="form-control" type="number" min="0" name="max_deposit" id="max_deposite" onChange={hanldeChange} value={data?.max_deposit} placeholder="Enter Max Deposite Amount" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label className="col-form-label">Minimum Withdrawal</label>
                                                        <input className="form-control" type="number" min="0" name="min_withdrawl" onChange={hanldeChange} id="min_withdrawl" value={data?.min_withdrawl} placeholder="Enter Min Withdrawal Amount" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label className="col-form-label">Maximum Withdrawal</label>
                                                        <input className="form-control" type="number" min="0" name="max_withdrawl" id="max_withdrawl" onChange={hanldeChange} value={data?.max_withdrawl} placeholder="Enter Max Withdrawal Amount" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label className="col-form-label">Minimum Transfer</label>
                                                        <input className="form-control" type="number" min="0" name="min_transfer" id="min_transfer" onChange={hanldeChange} value={data?.min_transfer} placeholder="Enter Min Transfer Amount" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label className="col-form-label">Maximum Transfer</label>
                                                        <input className="form-control" type="number" min="0" name="max_transfer" id="max_transfer" onChange={hanldeChange} value={data?.max_transfer} placeholder="Enter Max Transfer Amount" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label className="col-form-label">Minimum Bid Amount</label>
                                                        <input className="form-control" type="number" min="0" name="min_bid_amount" id="min_bid_amount" onChange={hanldeChange} value={data?.min_bid_amount} placeholder="Enter Min Bid Amount" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label className="col-form-label">Maximum Bid Amount</label>
                                                        <input className="form-control" type="number" min="0" name="max_bid_amount" id="max_bid_amount" onChange={hanldeChange} value={data?.max_bid_amount} placeholder="Enter Max Bid Amount" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label className="col-form-label">Welcome Bonus</label>
                                                        <input className="form-control" type="number" min="0" name="welcome_bonus" id="welcome_bonus" onChange={hanldeChange} value={data?.welcome_bonus} placeholder="Enter Welcome Bonus Amount" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="form-group col-2">
                                                        <label for="open_time">Withdraw Open Time</label>

                                                        <input name="withdrawl_open_time" id="withdraw_open_time" className="form-control digits" type="time" value={data?.withdrawl_open_time} onChange={hanldeChange} type="time" />
                                                    </div>
                                                    <div className="form-group col-2">
                                                        <label for="close_time">Withdraw Close Time</label>
                                                        <input name="withdrawl_close_time" id="withdraw_close_time" className="form-control digits" type="time" value={data?.withdrawl_close_time} onChange={hanldeChange} />

                                                    </div>
                                                    <div className="form-group col-2" style={{ marginTop: "30px" }}>
                                                        <div className="media">

                                                            <div className="custom-control custom-switch mb-3" dir="ltr">
                                                                <input type="checkbox" className="custom-control-input" id="global_batting_status" name="global_betting" checked={data.global_betting} value="1" onChange={hanldeChange}/>
                                                                <label className="custom-control-label" for="global_batting_status">Global Batting</label>
                                                            </div>

                                                        </div>


                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <button className="btn btn-danger waves-light m-t-10" onClick={(e) => {
                                                        handleUpdateAppSetting(e)
                                                    }} name="submitValueBtn">Submit</button>
                                                </div>
                                                <div className="form-group">
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