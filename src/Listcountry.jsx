import React from 'react'
import Country from './Main/Country/Country'
import { allCuontry } from './Data'

function Listcountry(props) {
    return (
        <>
            {props.cuontry.map(v => { return <Country key={v.name.common} name={v.name.common} capital={v.capital} continents={v.continents} flag={v.flags.png} /> }
            )}
        </>

    )
}

export default Listcountry