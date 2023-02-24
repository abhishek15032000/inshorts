import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <span className='name'>
              Inshorts clone made by - {" "}
              <a href="">Abhishek Singh</a>
        </span>
        <hr style={{width:"90%"}} />
        <div className='iconContainer'>
              <a href="">
                   <i className='fab fa-instagram-square fa-2x'></i>
              </a>
              <a href=""><i className ="fab fa-linkedin fa-2x"></i></a>
              <a href=""><i className='fas fa-link fa-2x'></i></a>
        </div>
    </div>
  )
}

export default Footer;