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
import { NextResponse } from 'next/server'
import { EnvUtil } from '@/utils/env'

export const GET = async () => {
    const pages = [`${EnvUtil.BASE_PATH}`]

    const urlSet = pages
        .map((page) => {
            // Remove none route related parts of filename.
            const path = page
                .replace('pages', '')
                .replace('_content', '')
                .replace(/(.tsx|.ts)/, '')
                .replace('.mdx', '')
            // Remove the word index from route
            const route = path === '/index' ? '' : path
            // Build url portion of sitemap.xml
            return `<url><loc>https://cloud.open-trial-labs.ibm.com${route}</loc></url>`
        })
        .join('')

    // Add urlSet to entire sitemap string
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`

    return new NextResponse(sitemapXml)
}
