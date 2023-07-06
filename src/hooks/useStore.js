import { create } from "zustand";
import { nanoid } from "nanoid";
export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [],
  addCube: (x, y, z) => {
    console.log("i ran")
    set((prev) => ({
      ...prev,
      cubes: [
        ...prev.cubes,
        { key: nanoid(), position: [x, y, z], texture: prev.texture },
      ],
    }));
  },
  removeCube: () => {},
  setTexture: () => {},
  saveWord: () => {},
  resetWorld: () => {},
}));
