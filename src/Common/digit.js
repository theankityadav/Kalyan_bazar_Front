import React from 'react'

const Digit = ({item,classname,sangam}) => {
    
  return (
    <div className={`digit_num ${classname?"red_bg":""}`} >
      {sangam? item==="0"?"000":item:item} 
    </div>
  )
}

export default Digit
