import React, {useEffect, useState} from 'react'
import Header from './Components/Header'
import Login from './Components/Login'
import SignIn from './Components/SignIn'
import MainTable from './Components/MainTable'
import Adm from './Components/Adm'
import GlobalState from './Global/GlobalState';
import styled from 'styled-components'

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: center;
  align-items: center;
  height: 50vh;

  background: fixed #9c27b0;
`

const Title = styled.h1`
  margin-top: 6vh;
  font-size:2rem;
  color: white;
`

function App() {
  const [page, setPage] = useState("login")
  
  const createAdmin = () => {
    const user = {name: "administrador", email: "adm@adm.com", password: "123456"}
        var users = JSON.parse(sessionStorage.getItem('users')) ? JSON.parse(sessionStorage.getItem('users')) : [];
        
        users.push(user)
        sessionStorage.setItem('users', JSON.stringify(users))

  }


  const goToLogin = () => {
    setPage("login")
  }

  const goToSingIn = () => {
    setPage("singin")
  }

  const goToMainTable = () => {
    setPage("main table")
  }

  const goToAdm = () => {
    setPage("adm")
  }

  useEffect(() => {
    createAdmin()
  },[])

if(page === "login"){
  return (
    <GlobalState>
      <MainContainer>
        <Header goToLogin={goToLogin} goToAdm={goToAdm}/>
        <Title>TOTVS List</Title>
        <Login 
        goToSingIn={goToSingIn} 
        goToMainTable={goToMainTable}
        />
      </MainContainer>
    </GlobalState>
  )
}else if(page === "singin") {
  return (
      <GlobalState>
        <MainContainer>
          <Header goToLogin={goToLogin} goToSingIn={goToSingIn} goToAdm={goToAdm}/>
          <Title>TOTVS List</Title>
          <SignIn goToMainTable={goToMainTable}/>
        </MainContainer>
      </GlobalState>
  )
}else if(page === "main table") {
  return (
      <GlobalState>
        <MainContainer>
          <Header goToLogin={goToLogin} goToAdm={goToAdm}/>
          <Title>To do list</Title>
          <MainTable/>
        </MainContainer>
      </GlobalState>
  )
} else if(page === "adm") {
  return (
      <GlobalState>
        <MainContainer>
          <Header goToLogin={goToLogin}/>
          <Title>Página do Administrador</Title>
          <Adm goToMainTable={goToMainTable}/>
        </MainContainer>
      </GlobalState>
  )
}


}

export default App;
