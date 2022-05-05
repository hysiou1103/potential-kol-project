import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/Logo.png";
import fbIcon from "../assets/imgs/fb-icon.png";
import lineIcon from "../assets/imgs/line-icon.png";
import signUp from "../assets/imgs/signUp.png";
import vote from "../assets/imgs/vote.png";



export const Navbar = () => { 
  return (
    <>
      <header>
        <div className="container navWrap">
          <Link to="/" className='logo'>
            <img src={Logo} alt="ETmall" />
          </Link>
          <div className="linkWrap">
            <nav>
              <li><a href="#">我要報名</a></li>
              <li><a href="#">我要投票</a></li>
            </nav>
            <div className="flex">
              <a href="#">
                <img src={fbIcon} alt="Facebook Sharing Icon" />
              </a>
              <a href="#">
                <img src={lineIcon} alt="Line Sharing Icon" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>

    
)

}