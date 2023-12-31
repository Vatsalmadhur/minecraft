import React, { useState } from 'react'
import { useStore } from '../hooks/useStore'

const Menu = () => {

    const [saveWorld,resetWorld]=useStore((state)=>[state.saveWorld,state.resetWorld])
  return (
    <div className='menu absolute' >
        <button onClick={()=>saveWorld()}>Save World</button>
        <button onClick={()=>resetWorld()}>Reset World</button>

      
    </div>
  )
}

export default Menu
