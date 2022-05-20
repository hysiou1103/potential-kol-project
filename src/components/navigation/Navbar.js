import React from 'react'
import { Link } from 'react-router-dom'
import Logo from 'imgs/Logo.png'
import fbIcon from 'imgs/fb-icon.png'
import lineIcon from 'imgs/line-icon.png'
import style from './navbar.module.scss'

export default function Navbar() {
  return (
    <header>
      <div className="container flex justify-between items-center ">
        <Link to="/" title="ETmall" className="logo">
          <img src={Logo} alt="ETmall" width="115" height="40" />
        </Link>
        <div className={`${style.linkWrap} flex justify-end items-center`}>
          <nav>
            <ul className="flex">
              <li>
                <Link to="/" title="我要報名">
                  我要報名
                </Link>
              </li>
              <li>
                <Link to="/votingActive" title="我要投票">
                  我要投票
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex">
            <a href="#">
              <img src={fbIcon} alt="Facebook Sharing Icon" width="30" height="30" />
            </a>
            <a href="#">
              <img src={lineIcon} alt="Line Sharing Icon" width="30" height="30" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
