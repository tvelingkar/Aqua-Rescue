/**
 * IBM Confidential
 *
 * OCO Source Materials
 * Copyright IBM Corp.  2022
 *
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has been
 * deposited with the U.S. Copyright Office.
 *
 */
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
