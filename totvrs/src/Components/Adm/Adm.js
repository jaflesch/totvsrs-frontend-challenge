import useInput from '../../Hooks/useInput'
import GlobalStateContext from '../../Global/GlobalStateContext'
import {useContext} from 'react'
import {MainContainer, Title, Label, Input, Send} from './Styled-Adm'

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