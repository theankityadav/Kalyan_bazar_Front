import React, { useState } from 'react'
import { loginApi } from '../service/authentication';

const Login = () => {
    const [formInput,setForminput]=useState("")
    const handleInput =(e)=>{
        const {name,value} = e.target;
        setForminput({...formInput,[name]:value})
    }

    const handleLogin =()=>{
        let data = formInput
        loginApi(data).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log("err")
            alert(err?.response?.data?.message||"Internal server error")
        })
    }
  return (
    <>
        <div className='login'>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-2"></div>
                    <div class="col-lg-6 col-md-8 login-box">
                        <div class="col-lg-12 login-key">
                            <i class="fa fa-key" aria-hidden="true"></i>
                        </div>
                        <div class="col-lg-12 login-title">
                            ADMIN PANEL
                        </div>

                        <div class="col-lg-12 login-form">
                            <div class="col-lg-12 login-form">
                                <form>
                                    <div class="form-group">
                                        <label class="form-control-label">USERNAME</label>
                                        <input name="name" type="text" class="form-control" onChange={handleInput}/>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label">PASSWORD</label>
                                        <input name="password" type="password" class="form-control"  onChange={handleInput} />
                                    </div>

                                    <div class="col-lg-12 loginbttm">
                                        <div class="col-lg-6 login-btm login-text">
                                        </div>
                                        <div class="col-lg-6 login-btm login-button">
                                            <button type="submit" class="btn btn-outline-primary" onClick={handleLogin}>LOGIN</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login