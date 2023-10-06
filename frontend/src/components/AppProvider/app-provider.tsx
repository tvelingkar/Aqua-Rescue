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

import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Metadata } from 'next'
import { AppConst } from "@/constants/app";
import AuthGate from "@/components/AuthGate";

export const generateMetadata = (): Metadata => {
    return AppConst.DEFAULT_SITE_METADATA
}

export const AppProvider = ({ children }: React.PropsWithChildren<Record<never, never>>) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        cacheTime: 3600000,
                        staleTime: 3600000,
                    },
                },
            }),
    )

    return (
        <QueryClientProvider client={queryClient}>
            <AuthGate />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}