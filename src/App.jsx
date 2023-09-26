import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import Pages
import Home from './Pages/Home'
import About from './Pages/About'
import Features from './Pages/Features'
import Book from './Pages/Book'
import Contact from './Pages/Contact'

function App() {
  const classes = useStyles();
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  )
}

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    overflowY: 'hidden !important',
  }
})

export default App
