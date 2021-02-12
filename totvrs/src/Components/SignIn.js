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
  width: 80vw;
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
  width: 25vw;
  margin: 2vh;
  }

  &:hover {
    
  background: #d05ce3;
  }

`

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