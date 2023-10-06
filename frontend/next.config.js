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
const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  compress: false,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    appDir: true,
  },
  output: 'standalone',
  compiler: {
    reactRemoveProperties: true,
    removeConsole: {
      exclude: process.env.NODE_ENV === 'production' ? ['error'] : ['log', 'error'],
    },
  },
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: true,
  i18n: {
    locales: ['en-us'],
    defaultLocale: 'en-us',
    localeDetection: false,
  },
  trailingSlash: false,
  sassOptions: {
    includePaths: ['node_modules', path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['cloud.open-trial-labs.ibm.com', 'dw1.s81c.com'],
    minimumCacheTTL: 86400,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     require('./scripts/generate-sitemap')
  //   }
  //   return config
  // }
}
