import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content:center;
  margin: 0;
  background: white;
  box-shadow: 0.5px 0.5px 10px 0.5px black;

  @media(max-width: 768px) {
  height: 8vh;
  }
`

export const NavButton = styled.button`
  font-size: 1rem;
  padding: 0 10vw;
  background: none;
  border: none;;
  margin: 0 1vw;
  outline: none;
  cursor: pointer;

  &:hover{
    background: rgba(0,0,0,0.2);
  }

`