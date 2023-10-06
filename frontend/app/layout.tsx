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
import { AppProvider } from '@/components/AppProvider/app-provider'
import '../styles/main/main.scss'
// import Script from "next/script"
// import { EnvUtil } from "@/utils/env.util"

const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en">
            <body>
                <AppProvider>{children}</AppProvider>
                {/* <Script
                    type="text/javascript"
                    src={`${EnvUtil.BASE_PATH}/static/js/site_css_loader.js`}
                /> */}
            </body>
        </html>
    )
}

export default RootLayout