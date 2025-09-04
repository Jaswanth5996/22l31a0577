import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Url from './components/urlShort'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Url />
    </>
  )
}

export default App
