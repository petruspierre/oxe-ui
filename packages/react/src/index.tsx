import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$brand500',
  borderRadius: '$md',
})

export function APp() {
  return <Button>Hello World</Button>
}
