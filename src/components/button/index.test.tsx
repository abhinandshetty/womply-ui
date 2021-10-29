import React from 'react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react'
import { Button } from '.'

describe('Button component test suite', () => {
  test('Button renders as expected', () => {
    const tree = renderer.create(<Button label="Custom Button" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('check if button label is rendered correctly', () => {
    const { getByText } = render(<Button label="Custom Button" />)

    expect(getByText('Custom Button')).toBeInTheDocument()
  })

  test("check if 'onClick' function is called", () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Button label="Custom Button" onClick={onClick} />)

    const button = getByTestId('btn')
    fireEvent.click(button)
    expect(onClick).toBeCalled()
  })
})
