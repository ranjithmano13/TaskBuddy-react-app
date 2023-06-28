import './navbar.css'
import React, { useState } from 'react'
import {MdClear,MdMenu} from 'react-icons/md'
import {ProPic} from '../../assets'
const Navbar = () => {
  const [toggle,setToggle] = useState(true);
  return (
    
    <nav>
        <div className='nav-header'>
          {toggle ? <MdMenu  size={52} onClick={()=>setToggle(false)}/> : <MdClear size={52} onClick={()=>setToggle(true)}/> }
          <h1 className='nav-header'>Task Buddy</h1>
        </div>
        <div className='nav-menu'>
        <button type='button' className='sign-button'>SignIn</button>
        <img src={ProPic} width={52} height={52}/>
        </div>
    </nav>
  )
}

export default Navbar