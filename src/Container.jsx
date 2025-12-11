import React from 'react'
import Obi from './Obi'
// props : (short for properties) are basically the way you pass data from a parent component to a child component in React. 

function Container() {

  let coco =()=> alert("hii")

  return (
    <div className='  bg-red-300 flex h-[200px] flex-col gap-10 justify-center items-center'>
      <h1 className=' text-4xl font-extrabold'>This is Container Component</h1>
      <Obi name="John" pot={coco}/>
    </div>
  )
}

export default Container