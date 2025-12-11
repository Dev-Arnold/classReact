import React, { useContext } from 'react'

function Home() { 
  return (
    <div className={` h-[40vh] duration-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5`}>
      <section className=' bg-amber-400'></section>
      <section className=' bg-pink-400'></section>
      <section className=' bg-red-400'></section>
      <section className=' bg-lime-800'></section>
    </div>
  )
}

export default Home