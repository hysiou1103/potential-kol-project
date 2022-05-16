import React from 'react'
import { Outlet } from 'react-router-dom'
import phoneLogo from 'imgs/phoneLogo.png'
import banner from 'imgs/banner.png'

export default function Home() {
  return (
    <section className="home relative">
      <div className="container flex flex-col items-center relative">
        <img src={phoneLogo} alt="Phone Logo" className="strawberry" width="44" height="44" />
        <img src={banner} alt="2021 KOL TAIPEI FESTIVAL" />
        <Outlet />
      </div>
    </section>
  )
}
