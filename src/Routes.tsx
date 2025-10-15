import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router'
import { Home } from './pages/Home_page/Home'
import Header from './components/Navbar'
import Footer from './components/Footer'
import { About } from './pages/About/About'
import { Leadership } from './pages/Leadership/Leadership'

export const RoutesPages :React.FC = () => {
  return (
    <Router>
          <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/leadership' element={<Leadership />} />
          </Routes>
          <Footer />
    </Router>
  )
}
