import React from 'react'
import { Outlet } from 'react-router-dom'
import phoneLogo from 'imgs/phoneLogo.png'
import banner from 'imgs/banner.png'
import style from './layout.module.scss'
import { useLocation } from 'react-router-dom'

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <section className={`flex flex-col items-center relative z-0 ${style.childWrap}`}>
      {!pathname.includes('competitorDetail') && (
        <>
          <img
            src={phoneLogo}
            alt="Phone Logo"
            className={`${style.strawberry} absolute z-1`}
            width="44"
            height="44"
          />
          <img src={banner} alt="2021 KOL TAIPEI FESTIVAL" width="960" height="1432" />
        </>
      )}
      <div className="container flex flex-col items-center w-full">
        <Outlet />
      </div>
    </section>
  )
}
