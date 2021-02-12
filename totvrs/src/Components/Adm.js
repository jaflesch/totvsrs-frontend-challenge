import useInput from '../Hooks/useInput'
import GlobalStateContext from '../Global/GlobalStateContext'
import {useContext} from 'react'
import styled from 'styled-components'

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
  width: 20vw;
  }

  &:hover {
    
  background: #d05ce3;
  }

`

function Adm(props) {
  const { states, setters } = useContext(GlobalStateContext);
  const [inputAdm, setInputAdm] = useInput({email: "", title: "", date: "", work: ""})

  const sendActivity = (event) => {
    event.preventDefault()
    var activities = JSON.parse(sessionStorage.getItem('activities')) ? JSON.parse(sessionStorage.getItem('activities')) : [];
    
    const activity = {email: inputAdm.email, title: inputAdm.title, date: inputAdm.date, id: 0+activities.length, work: inputAdm.work, checked: states.check}
    activities.push(activity)
    sessionStorage.setItem('activities', JSON.stringify(activities))
    alert("Tarefa adicionada com sucesso!")

    props.goToMainTable()
}


var dateObj = new Date()
  var month = dateObj.getUTCMonth() + 1
  var day = dateObj.getUTCDate()
  var year = dateObj.getUTCFullYear()

  if(month < 10) {
    month = "0" + month
  }

  if(day < 10) {
    day = "0" + day
  }


    return (
        <MainContainer>
            <Title>Crie uma tarefa</Title>
          
            <form onSubmit={sendActivity}>
              <Label>Email</Label>
              <Input type="email" value={inputAdm.email} onChange={setInputAdm} name="email"  placeholder="Ex: artur@email.com" required/>
              <Label>Titulo</Label>
              <Input type="text" value={inputAdm.title} onChange={setInputAdm} name="title"  placeholder="Ex: Fazer faxina" required/>
              <Label>Data</Label>
              <Input type="date" value={inputAdm.date} onChange={setInputAdm} min={`${year}-${month}-${day}`} name="date" required/>
              <Label>Trabalho</Label>
              <Input type="text" value={inputAdm.work} onChange={setInputAdm} name="work" placeholder="Ex: Passar aspirador" required/>
            
              <Send>Criar Atividade</Send>
            </form>
        </MainContainer>
    )
  }
  
  export default Adm;