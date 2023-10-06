import { render, screen } from '@testing-library/react'
import ErrorBoundary from '.'

const Child = () => {
  throw new Error()
}

describe('ErrorBoundary', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })
  it('ErrorBoundary should render', () => {
    console.error = jest.fn()
    const { container } = render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>,
    )
    expect(container).toBeTruthy()
    const errorMessage = screen.findAllByText('something went wrong')
    expect(errorMessage).toBeDefined()
  })
})
