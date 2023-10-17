
import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { EnvUtil } from '@/utils/env'

export const GET = async (request: NextRequest) => {
    const searchParams: URLSearchParams & { secret?: string; path?: string } = request.nextUrl.searchParams
    // Check for secret to confirm this is a valid request
    if (searchParams.secret !== EnvUtil.REVAL_SECRET_TOKEN) {
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
    }

    try {
        const res = await fetch(`${searchParams.path}`, {
            next: { revalidate: 60 },
        })
        const data = await res.json()

        return NextResponse.json(data)
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return new NextResponse('Error revalidating', {
            status: 500
        })
    }
}
