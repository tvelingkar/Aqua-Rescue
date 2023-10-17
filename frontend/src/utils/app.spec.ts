
import { AppUtil } from './app'

describe('AppUtils', () => {
  it('onLinkClick with redirectTo', () => {
    const response = AppUtil.onLinkClick('https://www.ibm.com/in-en')
    expect(response).not.toBeNull()
  })

  it('Invoke validateLink with valid URL', () => {
    const response = AppUtil.validateLink('https://www.ibm.com/in-en')
    expect(response).not.toBeNull()
  })

  it('Invoke validateLink with invalid URL', () => {
    const response = AppUtil.validateLink('_')
    expect(response).not.toBeNull()
  })
})
