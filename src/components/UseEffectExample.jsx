import React, { useEffect, useState } from 'react'

function UseEffectExample() {

     const [count, setCounter] = useState(0)
    const [name, setName] = useState('')
useEffect(()=>{
console.log('Komponent ilk defe render olunanda ishleyecek')
}, [])
useEffect(()=>{
console.log('Name deyishende ishleyecek')
}, [name])
useEffect(()=>{
console.log('Hemishe ishleyir')
})






   
  return (
    <div>
<div className="myCountDiv">  
    <p>{count}</p>
<button onClick={()=>{setCounter(count + 1)}}>artir</button>  </div>



<div className='myInputdiv'>

    <input type="text" value = {name} onChange={(e)=>{setName(e.target.value)}} />
    <p> ad:{name}</p>
</div>
    </div>
  )
}

export default UseEffectExample