import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elem } from './elem/elem'
import {NavBar} from "./navBar/navBar";
import {Spectrum} from "./spectrum/spectrum";
function App() {
    return(
        <Router>
            <Routes>
                <Route path='/' exact={true} element={<Elem/>}/>
                <Route path='/spectrum' exact={true} element={<Spectrum/>}/>
            </Routes>
        </Router>
    );
}

export default App;