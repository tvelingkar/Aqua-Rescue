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

export const GET = async () => {
    return NextResponse.json({ status: 'ok' })
}
