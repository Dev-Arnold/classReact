import React, { createContext, useState } from 'react'

export let ContextBox = createContext()

function MyContext({children}) {
    let [theme,setTheme] = useState(false)

    let toggleTheme =()=>{
        setTheme(!theme)
    }

  return (
    <ContextBox.Provider value={{theme, toggleTheme}}>
        {children}
    </ContextBox.Provider>
  )
}

export default MyContext