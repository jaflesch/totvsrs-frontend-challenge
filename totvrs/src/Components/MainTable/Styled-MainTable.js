import styled from 'styled-components'

export const MainContainer = styled.section`
margin: auto;
margin-top: 2vh;
width: 60vw;
display: flex;
background-color: white;
text-align: center;
align-items: center;

border-radius: 10px;
padding: 2vh 1vw;
box-shadow: 1px 1px 10px 1px black;

@media(max-width: 768px) {
margin: 0.5vh;
min-width: 80vw;
left: 20vw;
}
`

export const ItemContainer = styled.div`
  width: 50vw;    
   display: flex;
   justify-content: space-between;
   
   @media(max-width: 768px) {
    margin: 0.5vh;
    min-width: 70vw;
    left: 20vw;
    }
`

export const TitleActivity = styled.button`
border: none;
background: none;
cursor: pointer;
`

