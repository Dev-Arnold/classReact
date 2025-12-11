import React, { useState } from 'react'

function StateExamples() {
    let [coco,setCoco] = useState(false)

    let toggleColor =()=>{
        setCoco(!coco)
    }

  return (
    <div>
        <div className={` h-48 duration-200 w-[200px] bg-sky-300 ${coco == true? " ml-0 " : " ml-[-200px]"}`} ></div>
        <button onClick={toggleColor} className=' bg-black p-2 rounded-md text-white cursor-pointer'>click me</button>
    </div>
  )
}

export default StateExamples