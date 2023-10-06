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
"use client";

import { Hydrate as RQHydrate, HydrateProps } from "@tanstack/react-query";

function Hydrate(props: HydrateProps) {
    return <RQHydrate {...props} />;
}

export default Hydrate;