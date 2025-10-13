import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router'
import { Home } from './pages/Home_page/Home'
import Header from './components/Navbar'
import Footer from './components/Footer'

export const RoutesPages :React.FC = () => {
  return (
    <Router>
          <Header />
        <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer />
    </Router>
  )
}
