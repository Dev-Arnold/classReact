import React, { useContext } from 'react'
import BtnComp from './BtnComp'

// sm = 640px above
// md = 768px above
// lg = 1024px above
// xl = 1280px above
// 2xl = 1536px above

function About() {
  return (
    <div className={`h-[50vh] flex flex-col sm:flex-row lg:justify-evenly items-center bg-lime-400 mt-2 gap-2`}>
      <section className=' h-[30%] w-full lg:h-[80%] lg:w-[30%] sm:h-full sm:w-[33%] bg-sky-600'></section>
      <section className=' h-[30%] w-full lg:h-[80%] lg:w-[30%] sm:h-full sm:w-[33%] bg-sky-600'></section>
      <section className=' h-[30%] w-full lg:h-[80%] lg:w-[30%] sm:h-full sm:w-[33%] bg-sky-600'></section>
    </div>
  )
}

export default About