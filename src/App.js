import { Routes, Route, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import Layout from './components/Layout'
import CompetitorDetail from './page/CompetitorDetail/CompetitorDetail'
import Form from './page/Home/Form'
import VotingActive from './page/VotingActive/VotingActive'
import Navbar from './components/Navbar'
import PhoneNav from './components/PhoneNav'

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
        <Route path="/" element={<Layout />}>
          <Route index element={<Form />} />
          <Route path="votingActive" element={<VotingActive />} />
          <Route path="competitorDetail">
            <Route path=":competitorId" element={<CompetitorDetail />} />
          </Route>
        </Route>
      </Routes>
      <PhoneNav />
    </div>
  )
}

export default App
