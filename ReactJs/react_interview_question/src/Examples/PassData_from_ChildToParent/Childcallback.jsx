import React, { useState } from "react";

// CallbackFunciton
const ChildCallback = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState();
  const handleColorChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };

  return <input type="text" value={activeColor} onChange={handleColorChange} />;
};

export default ChildCallback;
