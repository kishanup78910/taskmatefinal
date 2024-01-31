import React, { useEffect, useState } from 'react'
import "../App.css"
import Logo from '../asset/logo.png'
const Header = () => {

  const [theme,setTheme] =  useState( JSON.parse(localStorage.getItem("theme") )||"medium");

  useEffect(()=>{

       localStorage.setItem("theme",JSON.stringify(theme))
      document.documentElement.classList.add(theme)  
  },[theme]);
  

  return (
    <header>
   <div className='logo'>

    <img src={Logo}  alt=''/>
    <span>Taskmate</span>
   </div>

    <div className='themeSelector'>
        <span onClick={()=>setTheme("light")} className='light'></span>
        <span onClick={()=>setTheme("medium")} className='medium'></span>
        <span onClick={()=>setTheme("dark")} className='dark'></span>
        <span onClick={()=>setTheme("gOne")} className='gOne'></span>
        <span onClick={()=>setTheme("gTwo")} className='gTwo'></span>
        <span onClick={()=>setTheme("gThree")} className='gThree'></span>
    </div>

   </header>
  )
}

export default Header
