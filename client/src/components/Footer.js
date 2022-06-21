import React from 'react'
import { BsInstagram,BsLinkedin,BsGithub } from 'react-icons/bs';


function Footer() {
  return (
    <div className="footerCntDetail footerCntTab">
        <div className="footerSocial">
            <div><a  href="https://www.instagram.com/0mrjb/" target="_blank"><BsInstagram className="footerTag" style={{width: '25px' , height: '25px', marginRight: '50px', cursor: 'pointer'}}></BsInstagram></a></div>
            <div><a  href="https://www.linkedin.com/in/iskomer/" target="_blank"><BsLinkedin className="footerTag" style={{width: '25px' , height: '25px', marginRight: '50px',cursor: 'pointer'}}></BsLinkedin></a></div>
            <div><a href="https://github.com/omerisk1" target="_blank"><BsGithub className="footerTag"  style={{width: '25px' , height: '25px',cursor: 'pointer' }}></BsGithub></a></div>

        </div>
        <div className="footerContent">
            <p>Developed By Ömer IŞIK</p>
        </div>
    </div>
  )
}

export default Footer