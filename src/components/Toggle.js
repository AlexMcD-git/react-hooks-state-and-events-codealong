import React from "react";
import React, { useState } from "react";



function Toggle() {
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  
  const [isOn, setIsOn] = useState(false);
  return <button handleClick={}>{isOn ? "ON" : "OFF"}</button>
}

export default Toggle;
