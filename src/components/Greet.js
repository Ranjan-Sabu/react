import react, { useState } from 'react'

let Hel=()=>{
  const [dark,setChange] =useState(false);
  const differ = () => {
    setChange(!dark);
  };
  const backgroundColor = dark?'white':'black';

  return(
    <div style={{backgroundColor}} className='main'>
       <button onClick={differ}>Change Theme</button>
    </div>
  )
}
export default Hel