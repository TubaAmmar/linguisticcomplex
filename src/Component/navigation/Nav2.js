import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Nav2 = () => {
  return (
    <>
    <Navcss>
       <ul className=' nav2 text-center'>
      <li><NavLink to={'/'} className='home'>Home</NavLink></li> <span></span>
      <li><NavLink to={'/'}>About Us</NavLink></li>
      <li><NavLink to={'/services'} >Services</NavLink></li>
     
      <li><NavLink to={'/'}>Study</NavLink></li>
      <li><NavLink to={'/ielts'}>Ielts</NavLink></li>
      <li><NavLink to={'/'}>PTE Login</NavLink></li>

      <li><NavLink to={'/success'}>Success</NavLink></li>
      <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
    
       
    </ul>
    </Navcss>


    </>

  )
}

const Navcss = styled.div`

.nav2{display:flex; background-color:#070754; height:80px; padding:1.5rem; margin-bottom:0rem}
 .nav2 li{font-size:1.3rem; font-weight:700; padding-left:1.5rem; list-style:none; border-right:.5px solid white;    }
 .home{margin-left:8rem;}
 .nav2 a{text-decoration:none; color:white; padding-right:1rem;   }
 .nav2 a:hover{color:#f5b300}


 
 
 @media (max-width:1140px){
  .nav2{display:none}
 }


`

export default Nav2