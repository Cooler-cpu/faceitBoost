import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Calculator from './components/Calculator'



//import { useSelector } from 'react-redux'


function App() {
  return (
    <div className="App">
      <Router>

        {/* need a router component*/}
        <Route path="/">
        <Calculator/>
        </Route>
        
        {/* need a router comwponent*/}
      </Router>
    </div>
  );
}

export default App;
