import React, { useContext } from 'react'
function Header() {

  return (
    <div className=' py-3 flex justify-around items-center'>
        <h1 className='text-3xl font-extrabold'>Logo</h1> 
        <nav className=' hidden sm:block'>
            <ol className=' flex gap-3.5'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ol>
        </nav>
        <button className=' hidden sm:block bg-black text-white font-bold p-2 cursor-pointer rounded-md'>
          Sign up
        </button>
        <button className=' sm:hidden font-bold text-3xl bg-black text-white p-1 px-2.5 rounded-md'>≡</button>
    </div>
  )
}

export default Header