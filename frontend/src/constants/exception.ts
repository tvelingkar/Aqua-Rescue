
export const EXCEPTION_MAP = {
  401: {
    statusText: 'Unauthorized Access',
    title: "Hold up, looks like you don't have access privileges to that page.",
    subtitle: '',
  },
  404: {
    statusText: 'Page Not Found',
    title: "Hmmm, we can't find the page you're looking for.",
    subtitle: 'You can enjoy the peace and quiet, or you can go back to our home page.',
  },
  500: {
    statusText: 'Internal Server Error',
    title: 'Hmmm, it looks like something in the universe is awry.',
    subtitle: 'You can enjoy the peace and quiet for now, and try again later.',
  },
  503: {
    statusText: 'Service Unavailable',
    title: 'Uh-oh! Red Hat Marketplace is temporarily unavailable.',
    subtitle:
      'Red Hat Marketplace is currently unavailable due to maintenance. You can enjoy the peace and quiet, or you can learn more about Red Hat OpenShift.',
  },
}
