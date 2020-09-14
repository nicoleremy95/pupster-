import './App.css';
import {BrowserRouter as Router} from 'react'
import React from 'react'
import Navbar from './components/navbar/Navbar'


function App() {
    return (
        <Router>
            <div>
               <Navbar/>  
            </div>
        </Router>
    )
}

export default App;
