import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router'
import { Home } from './pages/Home_page/Home'
import Header from './components/Navbar'
import Footer from './components/Footer'
import { About } from './pages/About/About'
import { Leadership } from './pages/Leadership/Leadership'
import { Ministry } from './pages/Ministry/Ministry'
import { History } from './pages/History/History' 
import { Aof } from './pages/Articles_of_faith/Aof'
import { Giving } from './pages/Giving/Giving'
import { Contact } from './pages/Contact/Contact'
import { Sermon } from './pages/Sermon/Sermon'
import { Event } from './pages/Event/Event'

export const RoutesPages :React.FC = () => {
  return (
    <Router>
          <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/history' element={<History />} />
            <Route path='/leadership' element={<Leadership />} />
            <Route path='/ministry' element={<Ministry  />} />
            <Route path='/aof' element={<Aof  />} />
            <Route path='/giving' element={<Giving  />} /> 
            <Route path='/contact' element={<Contact  />} /> 
            <Route path='/sermons' element={<Sermon  />} /> 
            <Route path='/events' element={<Event  />} /> 
          </Routes>
          <Footer />
    </Router>
  )
}
