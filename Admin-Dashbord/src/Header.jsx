import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({openSidebar}) {
  return (
    <div className='header'>

        <div className='menu-icon'>
            <BsJustify  className='icon' onClick={openSidebar}/>
         </div>

         <div className='header-lest'>

            <BsSearch className='icon'/>

         </div>

         <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/> 

         </div>
      
    </div>
  )
}

export default Header
