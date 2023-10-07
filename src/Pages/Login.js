import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { loginApi } from '../service/authentication';

const Login = () => {
    const navigate = useNavigate()
    const [formInput,setForminput]=useState({
        login_type:"email"
    })
    const handleInput =(e)=>{
        const {name,value} = e.target;
        setForminput({...formInput,[name]:value})
    }
    useEffect(()=>{
   if(localStorage.getItem("access_token")){
    navigate("/dashboard")
   }
    },[])

    const handleLogin =(e)=>{
        e.preventDefault()
        let data = formInput
        loginApi(data).then((res)=>{
            localStorage.setItem("access_token",res?.data?.access_token)
            window.location.href="/dashboard"
        }).catch((err)=>{
            console.log("err",err)
            alert(err?.response?.data?.message||"Internal server error")
        })
    }
  return (
    <>
        <div className='login'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-key">
                            <i className="fa fa-key" aria-hidden="true"></i>
                        </div>
                        <div className="col-lg-12 login-title">
                            ADMIN PANEL
                        </div>

                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form>
                                    <div className="form-group">
                                        <label className="form-control-label">USERNAME</label>
                                        <input name="email" type="text" className="form-control" onChange={handleInput}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">PASSWORD</label>
                                        <input name="password" type="password" className="form-control"  onChange={handleInput} />
                                    </div>

                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 login-btm login-text">
                                        </div>
                                        <div className="col-lg-6 login-btm login-button">
                                            <button type="submit" className="btn btn-outline-primary" onClick={handleLogin}>LOGIN</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login