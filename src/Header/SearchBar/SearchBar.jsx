import React, { useState } from 'react'
import "./SearchBar.css"

function SearchBar(props)  {

   return <>
  <input type="search" className="search-bar" id="search" onInput={(e)=> props.typeCuontry(e.target.value)} placeholder='Type a country name'/>

   </>

  

}

export default SearchBar