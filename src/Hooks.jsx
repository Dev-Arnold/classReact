import React, { useState } from 'react'
// React Hooks : These are building tools that help in creating a fast and interactive SPA(single page application).
// useState : This is a react hook that is used to store values. It comes with a function that is used to update that value.
// useRef 
// useEffect 
// useNav 
// useLocation 
// useContext  


function Hooks() {
    let [num,setNum] = useState(0)
    let [myColor,setMyColor] = useState("skyblue")

    function increaseNum() {
        setNum(num+1)
    }

    let colorChanger =()=>{
        setMyColor("red")
    }

  return (
    <div className=' h-[150px] w-[150px]' style={{backgroundColor:myColor}}>
        <button onClick={colorChanger} className=' bg-green-300 p-5 rounded-md cursor-pointer'>click me</button>
    
        <h1 className=' text-4xl font-bold'>{num}</h1>
        <button onClick={increaseNum} className=' bg-black p-2 rounded-md text-white'>click me</button>
    </div>
  )
}

export default Hooks