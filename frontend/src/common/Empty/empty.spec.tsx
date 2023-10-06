import { render } from '@testing-library/react'
import Empty from '.'
describe('Empty', () => {
  it('Empty has called', () => {
    const { container } = render(<Empty />)
    expect(container).toBeTruthy()
  })
})
