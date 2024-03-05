import React, { useContext, useState } from 'react'
import { ProfileNameContext } from './ProfileNameContext'

function Villagers() {
    const{profileName, setProfileName} = useContext(ProfileNameContext);
    const[editMode, setEditMode] = useState(false);
    const[name, setName] = useState(profileName);
    const handlesave = () =>{
        setProfileName(name);
        setEditMode(false);
    }
  return (
    <div>
      {! editMode ?(
        <div>
            <p>{profileName}</p>
            <button onClick={() =>setEditMode(true)}>Edit Name</button>
            </div>
      ):(
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={handlesave}>Save</button>
        </div>
      )}
    </div>
  ) 
}

export default Villagers
