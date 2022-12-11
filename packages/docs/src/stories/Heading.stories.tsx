import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@oxe-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor sit amet',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can use any HTML tag as a heading. Though as default, it's a `h2` tag.",
      },
    },
  },
}
