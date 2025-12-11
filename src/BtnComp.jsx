import React from 'react'

function BtnComp({text, fun}) {
  return (
    <div>
        <button onClick={fun} className=' bg-black text-white p-2 rounded-md'>{text}</button>
    </div>
  )
}

export default BtnComp