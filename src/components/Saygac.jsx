import React, { useState } from 'react'

function Saygac() {
    const [say, setSay] = useState(0) //ilkin deyer
  return (
   
    <div>
        <h2>{say}</h2>
        <button onClick={()=>{setSay(say + 1)}}>artir</button>
        <button onClick={()=>{setSay(say - 1)}}>azalt</button>
        <button onClick={()=>{setSay(0)}}>sifirla</button>
    </div>
  )
}

export default Saygac