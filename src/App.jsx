import React, { useState } from 'react'
import { allCuontry } from './Data'
import Header from './Header/Header'
import Listcountry from './Listcountry'
import Main from './Main/Main'

function App() {

    const [cuontry, setCuontry] = useState(allCuontry)

    const typeCuontry = (textToSearch) => {
        setCuontry(() => {
            return allCuontry.filter(v => {
                return (v.name.common.toLowerCase().startsWith(textToSearch.toLowerCase()))
            })
        })
    }

    return (
        <>
            <Header cuontry={cuontry} typeCuontry={typeCuontry} />
            <Listcountry cuontry={cuontry} />
        </>
    )
}

export default App