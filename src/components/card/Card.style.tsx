import styled from 'styled-components'
import checkIcon from '../../images/Vector.svg'

interface PropsType {
  placement?: string
  content?: string
  isChecked?: boolean
}

export const CardBox = styled.div<PropsType>`
  display: flex;
  border: 1px solid #efefef;
  border-radius: 10px;
  flex-direction: column;
  width: 229px;
  height: 150px;
  position: absolute;
  transition: all 0.5s ease-in-out;
  bottom: 40px;
  ${(p) => (p.placement === 'right' ? 'left: 100px;' : p.placement === 'left' ? 'right: 100px;' : null)}
  ${(p) => (p.isChecked ? 'box-shadow: 0px 0px 0px 2px #65e9d9;' : null)}
  :hover {
    box-shadow: 0px 0px 0px 2px #65e9d9;
    transition: all 0.5s ease-in-out;
  }
`

export const CardMedia = styled.img`
  width: 229px;
  height: 100px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`

export const CardCustomCheckbox = styled.label`
  width: 229px;
  height: 50px;
  border-radius: 0 0 10px 10px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: first baseline;
  gap: 10.25px;
  align-items: center;
  cursor: pointer;
`

export const CardTitle = styled.span<PropsType>`
  font-family: 'Plus Jakarta Sans';
  font-size: 14px;
`

export const CardCheckbox = styled.div<PropsType>`
  width: 13.5px;
  height: 13.5px;
  ${(p) => (p.isChecked ? null : 'box-shadow: 0px 0px 0px 1px rgba(34, 60, 80, 1) inset;')}
  border-radius: 20%;
  margin-left: 18.25px;
  ${(p) => (p.isChecked ? `background-image: url(${checkIcon})` : null)}
`
