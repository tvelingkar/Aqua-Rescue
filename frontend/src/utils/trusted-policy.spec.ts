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
import { TrustedPolicyUtil } from './trusted-policy'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let windowSpy: any

jest.mock('isomorphic-dompurify', () => ({
  sanitize: (content: string) => content,
}))

beforeEach(() => {
  windowSpy = jest.spyOn(window, 'window', 'get')
})

afterEach(() => {
  windowSpy.mockRestore()
})

describe('TrustedPolicy', () => {
  it('TrustedPolicy is initialized', () => {
    windowSpy.mockImplementation(() => ({
      trustedTypes: {
        createPolicy: jest.fn(),
      },
    }))

    expect(TrustedPolicyUtil.createHTML('test')).toBeTruthy()
    expect(TrustedPolicyUtil.createScriptURL('test')).toBeTruthy()
    expect(TrustedPolicyUtil.createScript('test')).toBeTruthy()
    expect(TrustedPolicyUtil.createPolicy()).toBe(undefined)
  })
})
