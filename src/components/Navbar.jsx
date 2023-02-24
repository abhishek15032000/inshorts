
import React from 'react'
import Sidebar from './Sidebar';
const Navbar = ({setCategory}) => {
  return (
    <div className='nav'>
          <div className='icon'>
               <Sidebar setCategory={setCategory}/>
          </div>
          <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="inshorts logo" />
    </div>
  )
}

export default Navbar