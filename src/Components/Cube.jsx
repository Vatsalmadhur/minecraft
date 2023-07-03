import {useBox} from'@react-three/cannon'
import * as textures from '../images/texture'

function Cube({position,texture}){
    const [ref] = useBox(()=>({
        type:'Static',
        position:position,
        texture:texture
    }))

    const activeTexture=textures[texture+"Texture"]

    return(
        <mesh ref={ref}>
            <boxBufferGeometry attach="geometry"/>
            <meshStandardMaterial map={activeTexture} attach='material'/>
        </mesh>
    )

}
export default Cube;