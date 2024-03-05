import React from 'react'
import{ BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import All from './All'
import Data from './Data'
import Cyber from './Cyber'
import Fullstack from './Fullstack'
import Career from './Career'

function App() {
  

  return (
    <Router>
    <div className="App">

      <nav className='navbar'>

        <div className='navdiv'>

          <div className='logo'>
        <ul>
          <li><a href='#'>
            <Link to="/">ALL</Link>
            </a></li>

          <li><a href='#'>
            <Link to="/fulstack">FULL STACK DEVELOPERS</Link>
            </a></li>

          <li><a href='#'>
            <Link to="/data">DATA SCIENCE</Link>
            </a></li>

          <li> <a href='#'>
            <Link to="/cyber">CYBER SECURITY</Link>
            </a></li>

          <li><a href='#'>
            <Link to="/career">CAREER</Link>
            </a></li>
        </ul>
        </div>
        </div>
      </nav>  

      <Routes>
        <Route path='/' Component={All}> </Route>

        <Route path='/data' Component={Data}>  </Route>
        
        <Route path='/cyber' Component={Cyber}>  </Route>
        
        <Route path='/fulstack' Component={Fullstack}>  </Route>
        
        <Route path='/career' Component={Career}> </Route>
      </Routes>
      
    </div>
    </Router>
  )
}

export default App
