
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import Digit from '../Common/digit'
import { getNumbers } from '../service/service'

const GameNumbers = () => {
    const {id} = useParams()
    const[data,setData]=useState([])
   
   
    
    useEffect(()=>{
       
        handleNumbers(id.toUpperCase())
    },[])

    const handleNumbers = (id)=>{
        getNumbers(id).then((res)=>{
            setData(res?.data?.data)
           
        }).catch((err)=>{
            console.log("error",err)

        })
  }
  return (
    <div className="content-wrapper">
    <div  className="container-fluid d-flex flex-wrap">
   { data.map((item,index)=> <Digit key={index} item={item}/>)}
    </div>
    </div>
  )
}

export default GameNumbers
