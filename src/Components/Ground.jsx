import React from "react";
import { usePlane } from "@react-three/cannon";
// import groundTexture from "../images/texture";
import grassImg from "../images/image";
import { useTexture } from "@react-three/drei";
import { NearestFilter, RepeatWrapping } from "three";

function Ground(){
      const [ref]= usePlane(()=>({position:[0,0,0], rotation:[-Math.PI/2,0,0]}))
      const groundTexture=useTexture(grassImg);
      groundTexture.magFilter=NearestFilter;
      groundTexture.wrapS = RepeatWrapping;
      groundTexture.wrapT = RepeatWrapping;
      groundTexture.repeat.set(100,100);

  return(
    <>
    <mesh ref={ref}>
      <planeBufferGeometry attach='geometry' args={[100,100]}/>
      <meshStandardMaterial attach='material' map={groundTexture}/>
       </mesh>
    </>
  )
}
export default Ground;
