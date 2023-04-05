import { Checkbox } from '@mui/material'
import React from 'react'

function Checking() {
    const Eventchange=(e)=>{
        console.log(e.target.value)
        document.write("Successfully Checkout")
    }
  return (
    <div>Checking
        <Checkbox color="primary" value ="ECE"
        onChange={(e)=>Eventchange(e)}/>
    </div>
  )
}

export default Checking