import GlobalStateContext from '../../Global/GlobalStateContext'
import {useContext} from 'react'
import {HeaderContainer, NavButton} from './Styled-Header'

function Header(props) {
  const { states, setters } = useContext(GlobalStateContext);

    const logout = () => {
    setters.setLogedPassword("")
    setters.setLogedEmail("")
    props.goToLogin()
    setters.setLoged(false)
    }

    return (
      <HeaderContainer>
        <NavButton onClick={props.goToLogin}>Home</NavButton>
        {states.logedEmail === "adm@adm.com" && <NavButton onClick={props.goToAdm}>Criar Tarefa</NavButton>}
        {states.logedEmail && <NavButton onClick={logout}>Sair</NavButton>}
      </HeaderContainer>
    )
  }
  
  export default Header;