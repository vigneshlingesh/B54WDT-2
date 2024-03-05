import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ProfileNameContext } from './ProfileNameContext'
import Villagers from './Villagers'

function App() {
  const [profileName, setProfileName] = useState('Type Your Name')

  return (
   <ProfileNameContext.Provider value={{profileName, setProfileName}}     >
    <div className='app'>
      <header className='app-header'>
        <h1>Componetia's Registry</h1>

        <Villagers /> 

      </header>

    </div>
   </ProfileNameContext.Provider>
  )
}

export default App
