import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Resume from './components/pages/Resume'
import Contact from './components/pages/Contact'
import NavBar from './components/pages/NavBar'

const App = () => (
    <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<About/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </Router>
)

export default App;