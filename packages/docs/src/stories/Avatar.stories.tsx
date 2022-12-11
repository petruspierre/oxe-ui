import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@oxe-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/petruspierre.png',
    alt: 'Petrus Pierre',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: '',
  },
}
