import React from "react"
import {Plane, Sky} from '@react-three/drei'
import {Canvas} from 'react-three-fiber'
import Ground from './Components/Ground.jsx'
import Player from './Components/Player.jsx'
import { Physics } from "@react-three/cannon"
import FPV from "./Components/FPV.jsx"
import Cubes from "./Components/Cubes.jsx"
import TextureSelector from "./Components/TextureSelector.jsx"
import Menu from "./Components/Menu.jsx"
function App() {

  return (
    <>
      
     <Canvas>
     <Sky sunPosition={[100,100,20]}/>
     <ambientLight intensity={0.5}/>
      <FPV/>
     <Physics>
      <Ground/>
      <Player/>
      <Cubes/>
     </Physics>

     </Canvas>
     <div className="centered absolute cursor ">+</div>
     <TextureSelector/>
     <Menu/>
    </>
  )
}

export default App;
