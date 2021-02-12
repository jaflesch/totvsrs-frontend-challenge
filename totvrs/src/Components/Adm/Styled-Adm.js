import styled from 'styled-components'

export const MainContainer = styled.section`
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

export const Title = styled.h2`
margin: 1rem;

@media(max-width: 768px) {
margin: 0.5vh;
}
`

export const Label = styled.p`

`

export const Input = styled.input`
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

export const Send = styled.button`
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