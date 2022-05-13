import { Routes, Route } from 'react-router-dom'
import Home from './page/Home/Home'
import Form from './page/Home/components/form/Form'
import Vote from './page/Home/components/vote/VotingActive'
import Navbar from './components/navigation/Navbar'
import PhoneNav from './components/navigation/PhoneNav'

function App() {
  return (
    <div className="App relative">
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
