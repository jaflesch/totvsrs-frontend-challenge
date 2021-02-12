import styled from 'styled-components'

export const MainContainer = styled.section`
position: absolute;
left: 30vw;
min-width: 40vw;
min-height: 30vh;
display:flex;
flex-direction: column;
background-color: white;
align-items: center;
justify-content: center;
z-index: 10;

border-radius: 10px;
box-shadow: 1px 1px 10px 1px black;

@media(max-width: 768px) {
  margin: 0.5vh;
  min-width: 60vw;
  left: 20vw;
  }
`

export const Title = styled.h2`
  margin: 1rem;

`

export const Buttons = styled.div`
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonGreen = styled.button`
  width: 8vw;
  padding: 0.4rem;
  margin: 3vh 3vw;
 
  border-radius: 10px;
  box-shadow: 0.5px 0.5px 5px 0.5px grey;
  border: none;
  cursor: pointer;
  outline: none;
  background: #64dd17;
  color:white;
  font-weight:bold;
  
  @media(max-width: 768px) {
  width: 20vw;
  }

  &:hover {
    
  background-color: #9cff57;
  }
`

export const ButtonRed = styled.button`
  width: 8vw;
  padding: 0.4rem;
  margin: 3vh 3vw;
 
  border-radius: 10px;
  box-shadow: 0.5px 0.5px 5px 0.5px grey;
  border: none;
  cursor: pointer;
  outline: none;
  background: #ff7043;
  color:white;
  font-weight:bold;
  
  @media(max-width: 768px) {
  width: 20vw;
  }

  &:hover {
    
  background-color: #ffa270;
  }
`