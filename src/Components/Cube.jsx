import { useBox } from "@react-three/cannon";
import * as textures from "../images/texture";
import { useStore } from "../hooks/useStore";
import { useState } from "react";
function Cube({ position, texture }) {
  const [ishovered, setIsHovered] = useState(false);
  const [ref] = useBox(() => ({
    type: "Static",
    position: position,
    // texture:texture
  }));

  const activeTexture = textures[texture + "Texture"];
  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        // console.log("face", clickedFace);
        const { x, y, z } = ref.current.position;
        if (e.altKey) {
          removeCube(x, y, z);
          return;
        } else if (clickedFace === 0) {
          addCube(x + 1, y, z);
        } else if (clickedFace === 1) {
          addCube(x - 1, y, z);
          return;
        } else if (clickedFace === 2) {
          addCube(x, y + 1, z);
          return;
        } else if (clickedFace === 3) {
          addCube(x, y + 1, z);
          return;
        } else if (clickedFace === 4) {
          addCube(x, y, z + 1);
          return;
        } else if (clickedFace === 5) {
          addCube(x, y, z - 1);
          return;
        } else if (clickedFace === 6) {
          addCube(x - 1, y, z);
          return;
        }
      }}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        color={ishovered ? "grey" : "white"}
        transparent={true}
        opacity={texture === "glass" ? 0.6 : 1}
        map={activeTexture}
        attach="material"
      />
    </mesh>
  );
}
export default Cube;
