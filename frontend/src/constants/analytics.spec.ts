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
export {}
describe('Analytics Constant', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })
  it('When Node Env is production and App Env is live', () => {
    jest.isolateModules(() => {
      process.env = Object.assign(process.env, {
        NODE_ENV: 'production',
        NEXT_PUBLIC_APP_ENV: 'live',
      })
      const analytics = require('./analytics')
      expect(analytics.AnalyticsConst.category).toBe('Starter')
    })
  })
})
