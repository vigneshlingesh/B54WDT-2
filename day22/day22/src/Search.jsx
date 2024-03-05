import React, { useState } from 'react'

function Search() {

   const[searchText, setSearchText] = useState('');

    const handlechange= (event) =>{
        setSearchText(event.target.value);
        console.log('Serach Text:', searchText);
    }

   return (
    <div>

        <h1>Search Text</h1>
        <label htmlFor='search'>Search:</label>
        <input type='text' id='search' onChange={handlechange}/>

        <p>
            Seraching for <strong>{searchText}</strong>
        </p>
      
    </div>
  )
}

export default Search