import { render } from '@testing-library/react'
import { axe } from 'vitest-axe'
import Button, { type ButtonProps } from './Button'

const props: ButtonProps = {
  // test props
}

describe('Button', () => {
  it('renders valid HTML', () => {
    const result = render(<Button {...props}>Test</Button>)

    expect(result.container.outerHTML).toHTMLValidate()
  })

  it('passes accessibility tests', async () => {
    const result = render(<Button {...props}>Test</Button>)

    expect(await axe(result.container.outerHTML)).toHaveNoViolations()
  })
})
