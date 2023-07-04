import React from "react";
import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/texture";
import { useStore } from "../hooks/useStore";

function Ground() {
  const [ref] = usePlane(() => ({
    position: [0, -0.5, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }));
  const [addCube] = useStore((state) => [state.addCube]);

  return (
    <>
      <mesh
        onClick={(e) => {
          console.log(e.point)
          e.stopPropagation()
          const [x, y, z] = Object.values(e.point)
          .map(val =>
            Math.ceil(val)
            );
            addCube(x, y, z);
            console.log(x, y, z);
            // console.log("cube added");
          }}

          ref={ref}
      >
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial attach="material" map={groundTexture} />
      </mesh>
    </>
  );
}
export default Ground;
