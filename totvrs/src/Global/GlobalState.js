import GlobalStateContext from './GlobalStateContext'
import React,{useState} from 'react'

const GlobalState = (props) => {
    const [logedEmail, setLogedEmail] = useState()
    const [logedPassword, setLogedPassword] = useState()
    const [modalState, setModalState] = useState(false)
    const [loged, setLoged] = useState(false)
    const [check, setCheck] = useState(false)
    const [titleToDelete, setTitleToDelete] = useState()

    const states = {logedEmail, logedPassword, modalState, loged, check, titleToDelete}
    const setters = {setLogedEmail, setLogedPassword, setModalState, setLoged, setCheck, setTitleToDelete}
    const data = {states, setters}

    return (
        <GlobalStateContext.Provider value={data}>
        {props.children}
        </GlobalStateContext.Provider>
    )
}


export default GlobalState