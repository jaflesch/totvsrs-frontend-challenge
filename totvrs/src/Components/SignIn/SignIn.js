import useInput from '../../Hooks/useInput'
import GlobalStateContext from '../../Global/GlobalStateContext'
import {useContext} from 'react'
import {MainContainer, Title, Label, Input, Send} from './Styled-SignIn'

function SignIn(props) {
    const [inputSignIn, setInputSignIn] = useInput({name: "", email: "", password: ""})
    const { states, setters } = useContext(GlobalStateContext);

    const sendSignIn = (event) => {
        event.preventDefault()

        const user = {name: inputSignIn.name, email: inputSignIn.email, password: inputSignIn.password}
        var users = JSON.parse(sessionStorage.getItem('users')) ? JSON.parse(sessionStorage.getItem('users')) : [];
        
        users.push(user)
        sessionStorage.setItem('users', JSON.stringify(users))

        setters.setLogedEmail(inputSignIn.email)
        setters.setLogedPassword(inputSignIn.password)
        setters.setLoged(true)

        props.goToMainTable()
    }

    return (
        <MainContainer>
          <Title>Cadastro</Title>
            <form onSubmit={sendSignIn}>
              <Label>Nome</Label>
              <Input type="text" value={inputSignIn.name} onChange={setInputSignIn} name="name" placeholder="Ex: Artur" required/>
              <Label>Email</Label>
              <Input type="email" value={inputSignIn.email} onChange={setInputSignIn} name="email" placeholder="Ex: artur@email.com" required/>
              <Label>Senha</Label>
              <Input type="password" value={inputSignIn.password} pattern={"^.{6,}"} title={"Sua senha deve conter 6 ou mais dígitos"} onChange={setInputSignIn} name="password" placeholder="Ex: 123" required/>

                <Send>Cadastrar</Send>
            </form>
        </MainContainer>
    )
  }
  
  export default SignIn;