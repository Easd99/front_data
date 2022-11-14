import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'

import './styles.css';



const App = () => {
    return (
        <div className='App'>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

        </div>
    )
}

export default App