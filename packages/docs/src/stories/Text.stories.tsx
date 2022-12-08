import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@oxe-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur labore quibusdam in inventore cumque. Accusantium ea magnam repudiandae harum voluptates quasi, suscipit cum autem placeat aspernatur, facere odio fugiat blanditiis.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
