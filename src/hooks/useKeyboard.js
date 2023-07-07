import { useCallback, useEffect, useState } from "react";
function actionByKey(key) {
  const keyActionMap = {
    KeyW: "moveForward",
    KeyS: "moveBackward",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space: "jump",
    Digit1: "dirt",
    Digit2: "grass",
    Digit3: "glass",
    Digit4: "wood",
    Digit5: "log",
  };
  return keyActionMap[key];
}

function useKeyboard() {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false,
  });
  

  const handelKeyDown = useCallback((e) => {
    const action = actionByKey(e.code);
    if (action) {
      setActions((prev) => {
        return {
          ...prev,
          [action]: true,
        };
      });
    }
  });
  const handelKeyUp = useCallback((e) => {
    const action = actionByKey(e.code);
    if (action) {
      setActions ((prev) => {
        return {
          ...prev,
          [action]: false,
        };
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keyup", handelKeyUp);
    document.addEventListener("keydown", handelKeyDown);
    return () => {
      document.removeEventListener("keyup", handelKeyUp);
      document.removeEventListener("keydown", handelKeyDown);
    };
  }, [handelKeyDown, handelKeyUp]);
  // console.log("action: " ,actions)
  return actions;
}


export default useKeyboard;
