import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/Logo.png";
import fbIcon from "../assets/imgs/fb-icon.png";
import lineIcon from "../assets/imgs/line-icon.png";

export const Navbar = () => { 

  return (
    <header>
      <div className="container navWrap">
        <Link to="/" title='ETmall' className='logo'>
          <img src={Logo} alt="ETmall" width="115px" height="40px" />
        </Link>
        <div className="linkWrap">
          <nav>
            <ul>
              <li>
                <Link to="/" title='我要報名'>
                  我要報名
                </Link>
              </li>
              <li>
                <Link to="/" title='我要投票'>
                  我要投票
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex">
            <a href="#">
              <img src={fbIcon} alt="Facebook Sharing Icon" width="30px" height="30px" />
            </a>
            <a href="#">
              <img src={lineIcon} alt="Line Sharing Icon" width="30px" height="30px" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}