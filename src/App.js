import { Routes, Route, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'

import Home from './page/Home/Home'
import CompetitorDetail from './page/CompetitorDetail/CompetitorDetail'
import Form from './page/Home/components/Form'
import VotingActive from './page/VotingActive/VotingActive'
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
    <div className="App mainBg relative z-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Form />} />
          <Route path="votingActive" element={<VotingActive />} />
        </Route>
        <Route path="competitorDetail">
          <Route path=":competitorId" element={<CompetitorDetail />} />
        </Route>
      </Routes>
      <PhoneNav />
    </div>
  )
}

export default App
