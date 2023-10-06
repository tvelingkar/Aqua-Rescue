import '../../../__tests__/__mocks__/matchMedia.mock'
import { fireEvent, render, screen } from '@testing-library/react'
import { AppHeader } from './app-header'

describe('AppHeader', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })
  afterAll(() => {
    jest.clearAllMocks()
  })
  beforeEach(() => {
    jest.spyOn(require('next/router'), 'useRouter').mockReturnValue({ pathname: '/' })
  })

  it('AppHeader is rendered', () => {
    const container = render(<AppHeader user={{ name: 'Test' }} />)
    expect(container).toBeTruthy()
    fireEvent.click(screen.getByRole('button'))
  })
})
