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
/* eslint-disable @typescript-eslint/no-explicit-any */
import _get from 'lodash/get'

declare global {
  interface Window {
    _analytics: any
    digitalData: any
    bluemixAnalytics: any
  }
}

/**
 * Send a track event to Segment through the Bluemix Analytics script.
 *
 * @export
 * @param {String} eventName - Available events - https://segment-standards.prod.ddp.cis.ibm.net/events
 * @param {Object} properties - Available properties - https://segment-standards.prod.ddp.cis.ibm.net/props
 */
export const trackEvent = async (eventName: string, properties = {}) => {
  // await awaitScriptLoad(isScriptLoadedAndReady);

  const pageInfo = _get(window.digitalData, ['page', 'pageInfo'], {})
  const { analytics = {}, platformTitle = null, productTitle = null } = pageInfo

  window.bluemixAnalytics &&
    window.bluemixAnalytics.trackEvent(eventName, {
      platformTitle,
      productTitle,
      category: analytics.category,
      ...properties,
    })
}

// // This helper returns a Promise that will resolve when the script is loaded and ready:
// const awaitScriptLoad = async (isScriptReady: () => boolean) => {
//   return new Promise<void>((resolve, reject) => {
//     const intervalId = setInterval(() => {
//       if (isScriptReady()) {
//         // Tidy up & tell the caller it's safe to run the script:
//         clearInterval(intervalId);
//         clearTimeout(timeoutId);
//         resolve();
//       }
//     }, 250);
//     // Recommended: Define a timeout too:
//     const timeoutId = setTimeout(() => {
//       clearInterval(intervalId);
//       reject();
//     }, 30000);
//   });
// }
// // This will be your own helper to detect whether script is ready:
// // This example tests for the object created by Video.js but some third parties load more scripts that add methods. You may need to detect them too.
// const isScriptLoadedAndReady = () => {
//   return 'bluemixAnalytics' in window;
// }
