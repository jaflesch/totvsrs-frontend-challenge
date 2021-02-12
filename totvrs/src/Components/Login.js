import useInput from '../Hooks/useInput'
import styled from 'styled-components'
import GlobalStateContext from '../Global/GlobalStateContext'
import {useContext} from 'react'

const MainContainer = styled.section`
  margin: auto;
  margin-top: 2vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: center;
  align-items: center;
  margin-bottom: 3vh;
  
  border-radius: 10px;
  padding: 2vh 1vw;
  box-shadow: 1px 1px 10px 1px black;

  @media(max-width: 768px) {
  width: 85vw;
  }
  
`

const Title = styled.h2`
  margin: 1rem;

  @media(max-width: 768px) {
  margin: 0.5vh;
  }
`

const Label = styled.p`

`

const Input = styled.input`
  width: 30vw;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 5px 0.1px grey;
  
  @media(max-width: 768px) {
  width: 60vw;
  }

  &:hover {
  box-shadow: 0.5px 0.5px 5px 0.1px #9c27b0;

  }
`

const Send = styled.button`
  width: 8vw;
  padding: 0.4rem;
  margin: 4vh;
 
  border-radius: 10px;
  box-shadow: 0.5px 0.5px 5px 0.5px grey;
  border: none;
  cursor: pointer;
  outline: none;
  background: #9c27b0;
  color:white;
  
  @media(max-width: 768px) {
  width: 20vw;
  margin: 2vh;
  }

  &:hover {
    
  background-color: #d05ce3;
  }

`

const Quit = styled.button`
  border: none;
  background: none;
  color: red;
  outline: none;
  cursor: pointer;
`

function Login(props) {
  const [inputLogin, setInputLogin] = useInput({email: "", password: ""})
  const { states, setters } = useContext(GlobalStateContext);

  const users = JSON.parse(sessionStorage.getItem('users'))
  
  const sendLoginRequest = (event) => {
    event.preventDefault()

    const index =  users.findIndex((user) => user.password === inputLogin.password && user.email === inputLogin.email)

    if(index === -1){
          if(window.confirm("email ou senha incorretos, deseja criar uma conta?")){
              props.goToSingIn()}
    } else {
          props.goToMainTable()
          setters.setLogedEmail(inputLogin.email)
          setters.setLogedPassword(inputLogin.password)
          setters.setLoged(true)
    }
  }

  const logout = () => {

    setters.setLogedPassword("")
    setters.setLogedEmail("")

    setters.setLoged(false)
  }

if(states.loged) {
  return(
    <MainContainer>
          <Title>Você já está logado</Title>

          <Send onClick={props.goToMainTable}>Continuar</Send>

          <p>Caso queira entrar com outra conta, <Quit onClick={logout}>Clique Aqui</Quit></p>

        </MainContainer>
  )
} else {

    return (
        <MainContainer>
          <Title>Login</Title>
          <form onSubmit={sendLoginRequest}>
            <Label>Email</Label>
            <Input type="email" value={inputLogin.email} onChange={setInputLogin} name="email" placeholder="Ex: artur@email.com" required/>
            <Label>Senha</Label>
            <Input type="password" value={inputLogin.password} onChange={setInputLogin} name="password" placeholder="Ex: 123" required/>

              <Send onClick={sendLoginRequest}>Entrar</Send>
          </form>
          <p>Ainda não possui conta? <Quit onClick={props.goToSingIn}>Clique Aqui</Quit></p>
        </MainContainer>
    )
}
  }
  
  export default Login;