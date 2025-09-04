import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Stat from './components/urlStatistics'
import './App.css'
import Url from './components/urlShort'
import './components/urlStyle.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav className='navbar'>
        <Link to="/" className='nav-link'>Home</Link> | 
        <Link to="/stats" className='nav-link'>URL Statistics</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Url />} />
        <Route path="/stats" element={<Stat />} />
      </Routes>
    </Router>
  )
}

export default App
