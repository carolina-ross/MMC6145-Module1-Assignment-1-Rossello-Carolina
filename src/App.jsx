import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Header from "./components/header"



export default function App() {
  return (
    <>
        <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="/contact">Contact</a>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  )
}