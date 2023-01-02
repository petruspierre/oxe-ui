import { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputProps } from '@oxe-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    id: 'email-input',
  },
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'https://',
  },
}
