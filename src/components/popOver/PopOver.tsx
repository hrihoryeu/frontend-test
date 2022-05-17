import React, { useState, useCallback, useRef, ReactChild, ReactChildren } from 'react'
import { Button, PopOverContainer } from './PopOver.style'
import Card from '../card/Card'

interface PropsType {
  placement?: 'left' | 'right'
  title?: string
  content?: string
  trigger?: 'click' | 'hover'
  children?: ReactChild | ReactChildren
}

const PopOver = ({ placement, content, title, trigger, children }: PropsType) => {
  const [togglePopOver, setTogglePopOver] = useState(false)
  const clickPopOver = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e)
    setTogglePopOver((togglePopOver) => !togglePopOver)
  }

  const cardRef = useRef<HTMLElement>(null)

  const hoverPopOver = useCallback(
    (e) => {
      if (trigger === 'click') {
        return
      }
      const timer = setTimeout(() => {
        if (e._reactName === 'onMouseEnter') {
          setTogglePopOver(true)
        } else if (e._reactName === 'onMouseLeave') {
          if (!cardRef.current?.matches(':hover')) {
            setTogglePopOver(false)
          }
        }
      }, 200)
      return () => clearTimeout(timer)
    },
    [trigger]
  )

  return (
    <PopOverContainer togglePopOver={togglePopOver}>
      {togglePopOver && (
        <Card
          ref={cardRef}
          onClose={() => (trigger === 'hover' ? setTogglePopOver(false) : null)}
          placement={placement}
          content={content}
          title={title}
        />
      )}
      <Button
        data-test-id='test-button-left-click'
        onClick={(e) => (trigger === 'click' ? clickPopOver(e) : null)}
        onMouseEnter={(e) => {
          trigger === 'hover' ? hoverPopOver(e) : null
        }}
        onMouseLeave={(e) => {
          trigger === 'hover' ? hoverPopOver(e) : null
        }}
      >
        {children}
      </Button>
    </PopOverContainer>
  )
}

export default PopOver
