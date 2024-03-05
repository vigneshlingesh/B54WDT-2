import { useState } from 'react'

import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {

  const [openSidebarToggle , setopenSidebarToggle] = useState(false)

  const openSidebar =() =>{
    setopenSidebarToggle (!openSidebar)
  }
  

  return (
    <div className="grid-container">
     
     <Header openSidebar ={openSidebar}/>
     <Sidebar  openSidebarToggle ={openSidebarToggle}/>
     <Home />
    
    </div>
  )
}

export default App
