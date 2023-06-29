import React from "react"
import {Plane, Sky} from '@react-three/drei'
import {Canvas} from 'react-three-fiber'
import Ground from './Components/Ground.jsx'
import Player from './Components/Player.jsx'
import { Physics } from "@react-three/cannon"
function App() {

  return (
    <>
      
     <Canvas>
     <Sky sunPosition={[100,100,20]}/>
     <ambientLight intensity={0.5}/>
     <Physics>
      <Ground/>
      <Player/>
     </Physics>

     </Canvas>
    </>
  )
}

export default App;
