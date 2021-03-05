import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom'
import { Route } from 'react-router-dom'
import CalculatingElo from './components/CalculatingElo'

//import { useSelector } from 'react-redux'


function App() {
  return (
    <div className="App">
      <Router>

        {/* need a router component*/}
        <Route path="/">
        <CalculatingElo/>
        </Route>
        
        {/* need a router comwponent*/}
      </Router>
    </div>
  );
}

export default App;
