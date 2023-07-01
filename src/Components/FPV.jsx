import { useThree } from "react-three-fiber";
import { Mesh } from "three";
import {PointerLockControls} from '@react-three/drei'
function FPV(){
 const {camera,gl}=useThree();
 return (

    <PointerLockControls args={[camera,gl]}/>
 );

}
export default FPV;