import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$brand500',
  borderRadius: '$sm',
  border: 0,
  fontWeight: '$bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$1 $2',
      },
      big: {
        fontSize: '$md',
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
