import React from 'react'
import { Link } from "react-router-dom";
import signUp from "../assets/imgs/signUp.png";
import vote from "../assets/imgs/vote.png";



export const PhoneNav = () => { 
  return (
    <nav className='phoneNav'>
      <ul className='flex items-center'>
        <li>
          <a href="#" className='flex flex-col'>
            <img src={signUp} alt="" />
            我要報名
          </a>
        </li>
        <li>
          <a href="#" className='flex flex-col'>
            <img src={vote} alt="" />
            我要投票
          </a>
        </li>
      </ul>
    </nav>
  )

}