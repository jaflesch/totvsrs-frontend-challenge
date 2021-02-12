import GlobalStateContext from '../../Global/GlobalStateContext'
import {useContext} from 'react'
import {MainContainer, Title, Buttons, ButtonGreen, ButtonRed} from './Styled-Modal'

function Modal(props) {
  const { states, setters } = useContext(GlobalStateContext);
  const activities = JSON.parse(sessionStorage.getItem('activities'))


const cancelModal = () => {
  setters.setModalState(false)
}

const deleteActivity = () => {
    const index =  activities.findIndex((activity) => activity.title === props.modalActivity.title)
    console.log(index)

    activities.splice(index, 1)
    sessionStorage.setItem('activities', JSON.stringify(activities))
    cancelModal()
}

console.log(props.modalActivity)
    return (
        <MainContainer>
          <Title>{props.modalActivity.title && props.modalActivity.title}</Title>
                      <div>
                            <p>{props.modalActivity.work}</p>
                          <Buttons>
                            <ButtonRed onClick={cancelModal}>Voltar</ButtonRed>
                            <ButtonGreen onClick={deleteActivity}>Concluída</ButtonGreen>
                        </Buttons>
                      </div>
        </MainContainer>
    )
  }
  
  export default Modal;