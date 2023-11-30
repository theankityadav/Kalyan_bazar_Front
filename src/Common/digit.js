import React from 'react'

const Digit = ({item,classname}) => {
    
  return (
    <div className={`digit_num ${classname?"red_bg":""}`} >
      {item} 
    </div>
  )
}

export default Digit
