import React, {useState} from 'react';
import ChildCallback from './Childcallback';

// Parent Component
const Parent = () => {    
const [UiColor, setUiColor] = useState(null);
  // cllback function
  const getColor = (color) => {
    setUiColor(color);
  }
  return (
    <div>
        <div style={{width:"100px", height:"100px", border:"1px solid", backgroundColor:`${UiColor}`}}>
Parent Component
        </div>
        <ChildCallback getColor={getColor} /></div>
  )
}

export default Parent