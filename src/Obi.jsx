import React, { useRef, useState } from 'react'

function Obi() {

  let [isPassword,setPassword] = useState(true)
  let [forBar,setBar] = useState("0%")
  let myInput = useRef()
  
  function moveBar() {
    if (myInput.current.value.length <= 4) {
      setBar('30%')
    }else if(myInput.current.value.length <= 7){
      setBar('70%')
    }else if(myInput.current.value.length > 7){
      setBar('100%')
    }
  }

  return (
    <div>
      <div>
        <input onInput={moveBar} ref={myInput} type={isPassword ? "password" : "text"} className=' border-2 p-2'/>
        <button onClick={()=> setPassword(!isPassword)} className=' bg-black text-white p-1'>show</button>
      </div>

      <section>
        <section className=' h-[5px] bg-black rounded-2xl w-[140px] mt-1.5'>
          <div className=' h-[inherit] rounded-[inherit] duration-200 bg-red-600' style={{width: forBar}}></div>
        </section>


      </section>

    </div>
  )
}

export default Obi