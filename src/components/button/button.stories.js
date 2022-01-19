import React from 'react'

import Button from './'

export default {
  title: 'Atoms/My button',
  component: Button,
  argTypes: {
    label: { control: 'text' }
  }
}

const Template = args => <Button {...args} />

export const One = Template.bind({})
One.args = {
  label: 'Something'
}

export const Two = Template.bind({})
Two.args = {
  label: 'this is the second one'
}