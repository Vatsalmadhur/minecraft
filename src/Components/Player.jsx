import {useThree} from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Vector3 } from "three";

function Player(){
    const {camera}= useThree();
    const [ref,api]=useSphere(()=>({
        mass: 1,
        type:"Dynamic",
        position:[0,1,0]
    }))

    const pos=useRef([0,0,0]);
    useEffect(()=>{
        api.position.subscribe((p)=>pos.current=p)
    },[api.position])
    useEffect(()=>{
        api.velocity.subscribe((v)=>vel.current=v)
    },[api.velocity])
    useFrame(()=>{
        console.log('frame');
        camera.position.copy(new Vector3(pos.current[0],pos.current[1],pos.current[2]));
    })
    return <mesh ref={ref}></mesh>
}
export default Player;