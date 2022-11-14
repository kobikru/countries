import React, { useState } from 'react'
import "./Country.css"

function Country(props) {

  return (
    <div className='cuontry'>
      <img className='img' src={props.flag} />
      <div className='cuontry-data'>
        <div style={{ borderLine: "2px" }} className='name' >{props.name}<span style={{ fontWeight: "lighter" }}> -{props.capital}</span></div><br />
        <div className='continents'>{props.continents}</div>
      </div>
    </div>

  )
}

export default Country