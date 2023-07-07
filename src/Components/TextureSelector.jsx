import React, { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import useKeyboard from "../hooks/useKeyboard";


function TextureSelector(){
  const [visible, setVisible] = useState(false);
  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);

  const { dirt, grass, glass, wood, log,} = useKeyboard();


  useEffect(() => {
    const textures = { dirt, grass, glass, wood, log };
    console.log("dirt", dirt);
    const pressedTexture = Object.entries(textures).find(([k, v]) => v);

    if (pressedTexture) {
      console.log("pressed", pressedTexture[0]);
      setTexture(pressedTexture);
    }
  }, [setTexture, dirt, grass, glass, wood, log]);


  useEffect(() => {
    const visiblitiyTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000);
    setVisible(true);
    return () => {
      clearTimeout(visiblitiyTimeout);
    };
  }, [activeTexture]);
  return visible && (<div className="absolute centered">Texture selector</div>);
};

export default TextureSelector;
