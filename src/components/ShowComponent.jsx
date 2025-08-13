import React, { useState } from 'react'

function ShowComponent() {
const [goster, setGoster] = useState(true)


  return (
    <div>
<button onClick={()=>{setGoster(!goster)}}>{goster ? 'Gizlet':'Goster'}</button>
{goster && <p>Bu mesaj gorunur</p>}

    </div>
  )
}

export default ShowComponent