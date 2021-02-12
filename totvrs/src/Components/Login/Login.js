import useInput from '../../Hooks/useInput'
import GlobalStateContext from '../../Global/GlobalStateContext'
import {useContext} from 'react'
import {MainContainer, Title, Label, Input, Send, Quit} from './Styled-Login'

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