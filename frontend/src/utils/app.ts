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
export const AppUtil = {
  onLinkClick: (redirectsTo: string, target?: string) => {
    const aTag = document.createElement('a')
    aTag.rel = 'noopener'
    aTag.target = target || '_self'
    aTag.href = redirectsTo
    aTag.click()
  },

  validateLink: (redirectsTo: string) => {
    return redirectsTo.match('[^A-Za-z0-9]$') ? '__error' : redirectsTo
  },
}
