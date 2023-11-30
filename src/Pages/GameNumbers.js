
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
   { data[0]?.number? data.map((item,index)=> <Digit key={index} item={item?.number}/>):null}
    {data[0]?.ank_list?.length>0? data.map((item,index)=> {

       return(
           <>
           <div style={{width:"100%"}}>
           <Digit key={index} classname='red_bg' item={item?.ank}/>
           </div>
           
           
           {
               item?.ank_list?.map((item,index)=>{
                   return(
                 <Digit key={index} item={item}/>
                   )
               })
           }
           <br/>
           </>
       )
   }):null}
    </div>
    </div>
  )
}

export default GameNumbers
