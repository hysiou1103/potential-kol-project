import React from 'react'
import { Link } from 'react-router-dom'
import signUp from 'imgs/signUp.png'
import vote from 'imgs/vote.png'

export const PhoneNav = () => {
  return (
    <nav className="phoneNav">
      <ul>
        <li>
          <Link to="/" title="我要報名">
            <img src={signUp} alt="Sign Up Link" width="24px" height="24px" />
            我要報名
          </Link>
        </li>
        <li>
          <Link to="/" title="我要投票">
            <img src={vote} alt="Voting Link" width="24px" height="24px" />
            我要投票
          </Link>
        </li>
      </ul>
    </nav>
  )
}
