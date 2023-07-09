import { create } from "zustand";
import { nanoid } from "nanoid";

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))


export const useStore = create((set) => ({
  texture: "dirt",
  cubes: getLocalStorage('cubeStorage')|| [],
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
  saveWorld: () => {
    alert('saveddddd')
		set(prev => {
			setLocalStorage('cubeStorage', prev.cubes)
      return prev;
		})
	},
	resetWorld: () => {
		set(() => ({
			cubes: []
		}))
	},
}));
