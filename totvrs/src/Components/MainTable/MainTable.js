import GlobalStateContext from '../Global/GlobalStateContext'
import {useContext, useState} from 'react'
import Modal from './Modal'
import {MainContainer, ItemContainer, TitleActivity} from './Styled-MainTable'

function MainTable() {
    const { states, setters } = useContext(GlobalStateContext);
    const activities = JSON.parse(sessionStorage.getItem('activities'))
    const [modalActivity, setModalActivity] = useState()

    const openModal = (activity) => {
        setters.setModalState(true)
        setModalActivity(activity)
    }

    return (
        <MainContainer>
          <div>
            
            <ItemContainer>
              <p>ID:</p>
              <p>Atividade:</p>
              <p>Data:</p>
              <p>Status:</p>
            </ItemContainer>

              {activities && activities.map((activity) => {
                if(activity.email === states.logedEmail) {
                    return(
                      <ItemContainer>
                          <p>{activity.id}</p>
                          <TitleActivity onClick={() => openModal(activity)}>{activity.title}</TitleActivity>
                          <p>{activity.date}</p>
                          <p>Incompleta</p>
                      </ItemContainer>
                    )
                  } 
              })}
          </div>
          {states.modalState && <Modal modalActivity={modalActivity}/>}
        </MainContainer>
    )
  }
  
  export default MainTable;