import { Routes, Route } from 'react-router-dom'
import Home from './page/Home/Home'
import Vote from './page/Vote/VoteIndex'
import Navbar from './components/navigation/Navbar'
import PhoneNav from './components/navigation/PhoneNav'

function App() {
  return (
    <div className="App relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="votingActive" element={<Vote />} />
      </Routes>
      <PhoneNav />
    </div>
  )
}

export default App
