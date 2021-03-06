import React from 'react'
import { Link } from 'react-router-dom'
import signUp from 'imgs/signUp.png'
import vote from 'imgs/vote.png'
import style from './phoneNav.module.scss'

export default function PhoneNav() {
  return (
    <nav className={style.phoneNav}>
      <ul className="flex justify-around items-center">
        <li>
          <Link to="/" title="我要報名">
            <img src={signUp} alt="Sign Up Link" width="24" height="24" />
            我要報名
          </Link>
        </li>
        <li>
          <Link to="/votingActive" title="我要投票">
            <img src={vote} alt="Voting Link" width="24" height="24" />
            我要投票
          </Link>
        </li>
      </ul>
    </nav>
  )
}
