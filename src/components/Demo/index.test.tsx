import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Demo from './index'

describe('Test Demo component', () => {
  test('should render correctly', () => {
    const wrapper = render(<Demo />)

    expect(wrapper.getByText(/Ready to build something amazing/i)).toBeVisible()
    expect(wrapper).toMatchSnapshot()
  })
})
