import { Routes, Route, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'

import Home from './page/Home/Home'
import Form from './page/Home/components/Form'
import Vote from './page/VotingActive/VotingActive'
import Navbar from './components/navigation/Navbar'
import PhoneNav from './components/navigation/PhoneNav'

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [pathname])
  return (
    <div className="App relative z-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Form />} />
          <Route path="votingActive" element={<Vote />} />
        </Route>
      </Routes>
      <PhoneNav />
    </div>
  )
}

export default App
