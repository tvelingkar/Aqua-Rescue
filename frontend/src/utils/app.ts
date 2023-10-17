
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
