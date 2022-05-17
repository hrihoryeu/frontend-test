import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { default as PopOverComponent } from './PopOver'
import img1 from '../../images/mini_view.png'

export default {
  title: 'PopOver',
  component: PopOverComponent
} as ComponentMeta<typeof PopOverComponent>

const Template: ComponentStory<typeof PopOverComponent> = (args) => <PopOverComponent {...args} />

export const PopOver = Template.bind({})
PopOver.args = {
  placement: 'left',
  title: 'title text',
  content: img1,
  trigger: 'click',
  children: 'button text'
}
