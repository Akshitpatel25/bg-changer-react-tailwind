/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function App() {
  const [backcolor, setback] = useState("gray")

  const redcolor = () => {
    setback("#FC4A50")
  }
  const greencolor = () => {
    setback("#39B54A")
  }
  const purplecolor = () => {
    setback("#8267E5")
  }
  const blackcolor = () => {
    setback('black')
  }


  return (
    <>
      <div className='w-screen h-screen ' style={{background:backcolor}} >
        <div className='w-screen h-20 bg-gray-400 flex gap-2 justify-center items-center '>
          <button className='w-20 h-full bg-red-300 rounded-xl' onClick={redcolor}>Red</button>
          <button className='w-20 h-full bg-green-300 rounded-xl' onClick={greencolor}>green</button>
          <button className='w-20 h-full bg-purple-300 rounded-xl' onClick={purplecolor}>Purple</button>
          <button className='w-20 h-full bg-black text-white rounded-xl' onClick={blackcolor}>black</button>
        </div>
      </div> 
    </>
  );
}

export default App;
