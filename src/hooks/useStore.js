import { create } from "zustand";
import { nanoid } from "nanoid";
export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [],
  addCube: (x, y, z) => {
    // console.log("i ran")
    set((prev) => ({
      ...prev,
      cubes: [
        ...prev.cubes,
        { key: nanoid(), position: [x, y, z], texture: prev.texture },
      ],
    }));
  },
  removeCube: (x,y,z) => {
    // console.log("dafsfs")
    set((prev) => ({
      cubes: 
        prev.cubes.filter(cube=>{
          const [X,Y,Z]=cube.position
          return X!=x || Y!=y || Z!=z
        })
      ,
    }));

  },
  setTexture: (e) => {
    set(prev=>({...prev,texture:e}))
  },
  saveWord: () => {},
  resetWorld: () => {},
}));
