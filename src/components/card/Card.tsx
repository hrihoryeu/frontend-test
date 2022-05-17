import React, { useState, forwardRef } from 'react'
import { CardBox, CardCustomCheckbox, CardMedia, CardTitle, CardCheckbox } from './Card.style'

interface PropsType {
  placement?: string
  title?: string
  content?: string
  onClose: () => void
}

const Card = forwardRef<any, PropsType>(({ placement, content, title, onClose }, ref) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckbox = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true)
  }

  return (
    <CardBox data-test-id='pop-over-card' onMouseLeave={onClose} ref={ref} placement={placement} isChecked={isChecked}>
      <CardMedia src={content} />
      <CardCustomCheckbox onClick={handleCheckbox}>
        <CardCheckbox isChecked={isChecked} />
        <CardTitle>{title}</CardTitle>
      </CardCustomCheckbox>
    </CardBox>
  )
})

export default Card
