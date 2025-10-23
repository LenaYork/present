import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu/Menu'
import About from './components/About/About'
import Services from './components/Services/Services'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Menu />

      <h1>Коуч по личностному развитию и отношениям</h1>
      <About />
      <Services />

      <Footer />
    </div>
  )
}

export default App
