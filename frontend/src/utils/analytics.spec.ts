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
import { trackEvent } from './analytics'

describe('analyticsUtil', () => {
  beforeAll(() => {
    global.window.digitalData = {
      page: {
        pageInfo: {
          productTitle: 'Next Starter',
          platformTitle: 'Next Starter',
          analytics: { category: 'Cool stuff' },
        },
      },
    }
  })

  describe('trackEvent', () => {
    beforeEach(() => {
      global.window.bluemixAnalytics = { trackEvent: jest.fn() }
    })

    it('sends a track event to Segment including the eventName and properties given', () => {
      const mockEventName = 'clicked something cool'
      const mockProperties = {
        isCool: true,
      }

      trackEvent(mockEventName, mockProperties)
      expect(global.window.bluemixAnalytics.trackEvent).toHaveBeenCalledWith(mockEventName, {
        ...mockProperties,
        productTitle: global.window.digitalData.page.pageInfo.productTitle,
        platformTitle: 'Next Starter',
        category: global.window.digitalData.page.pageInfo.analytics.category,
      })
    })

    it('should use the default values if they do not exist in the ddo', () => {
      global.window.digitalData = {}

      const mockEventName = 'clicked something cool'

      trackEvent(mockEventName)
      expect(global.window.bluemixAnalytics.trackEvent).toHaveBeenCalledWith(mockEventName, {
        productTitle: null,
        platformTitle: null,
        category: undefined,
      })
    })
  })
})
