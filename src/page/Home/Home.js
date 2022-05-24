import React from 'react'
import { Outlet } from 'react-router-dom'
import phoneLogo from 'imgs/phoneLogo.png'
import banner from 'imgs/banner.png'
import style from './home.module.scss'

export default function Home() {
  return (
    <section className="container flex flex-col items-center relative z-0">
      <img
        src={phoneLogo}
        alt="Phone Logo"
        className={`${style.strawberry} absolute z-1`}
        width="44"
        height="44"
      />
      <img src={banner} alt="2021 KOL TAIPEI FESTIVAL" />
      <Outlet />
    </section>
  )
}
