import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import "./Header.css"

function Header(props) {
  return (
  
    <div className='header'>
        Countris : ({props.cuontry.length})
        <SearchBar typeCuontry={props.typeCuontry} /> 
    
    </div>
  )
}

export default Header