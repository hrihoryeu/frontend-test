import styled from 'styled-components'

interface Props {
  togglePopOver: boolean
}

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: white;
  border-radius: 2px;
  border: 1px solid #868686;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  :hover {
    border-color: #65e9d9;
    transition: all 0.5s ease-in-out;
    color: #65e9d9;
    box-shadow: 0px 0px 8px -5px #65e9d9;
  }
`

export const PopOverContainer = styled.div<Props>`
  position: ${(p) => (p.togglePopOver ? 'absolute' : 'static')};
`
