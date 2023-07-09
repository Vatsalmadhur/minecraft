import React, { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import useKeyboard from "../hooks/useKeyboard";
import {dirtImg,glassImg,grassImg,logImg,woodImg} from '../images/image'
const images={
  dirt:dirtImg,
  grass:grassImg,
  glass:glassImg,
  wood:woodImg,
  log:logImg
}
function TextureSelector(){
  const [visible, setVisible] = useState(false);
  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);

  const { dirt, grass, glass, wood, log,} = useKeyboard();


  useEffect(() => {
    const textures = { dirt, grass, glass, wood, log };
    // console.log("dirt", dirt);
    const pressedTexture = Object.entries(textures).find(([k, v]) => v);

    if (pressedTexture) {
      console.log("pressed", pressedTexture[0]);
      setTexture(pressedTexture[0]);
    }
  }, [setTexture, dirt, grass, glass, wood, log]);


  useEffect(() => {
    const visiblitiyTimeout = setTimeout(() => {
      setVisible(false);
    },2000);
    setVisible(true);
    return () => {
      clearTimeout(visiblitiyTimeout);
    };
  }, [activeTexture]);
  return visible && (<div className="absolute centered texture-selector">
    {Object.entries(images).map(([k,src])=>{
      return(<img key={k} src={src} alt={k}
        className={`${k === activeTexture ? 'active' : ''}`}
        />)
    })}
  </div>);
};

export default TextureSelector;
