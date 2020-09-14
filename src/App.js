import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Discover from './components/discover/Discover';
import Search from './components/search/Search';
import About from './components/about/About';


export default function App() {
    return (
        <Router>
            <div>
               <Navbar/>  
               <Switch>
                   <Route path="/">
                       <Home/>
                   </Route>
                   <Route path="/about">
                       <About/>
                   </Route>
                   <Route path="/discover">
                       <Discover/>
                   </Route>
                   <Route path="/search">
                       <Search/>
                   </Route>
               </Switch>
            </div>
        </Router>
    )
}

