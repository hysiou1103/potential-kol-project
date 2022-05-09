import React from 'react'
import { Form } from './components/Form'
import phoneLogo from 'imgs/phoneLogo.png'
import banner from 'imgs/banner.png'
import signUpForm from 'imgs/signUpForm.png'

export const Home = () => {
  return (
    <section className="home relative">
      <div className="container flex flex-col items-center relative">
        <img src={phoneLogo} alt="Phone Logo" className="strawberry" />
        <img src={banner} alt="2021 KOL TAIPEI FESTIVAL" />
        <img src={signUpForm} alt="Sign Up Form" />
        <Form />
      </div>
    </section>
  )
}
