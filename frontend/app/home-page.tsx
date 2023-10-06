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
import { AppConst } from '@/constants/app'
import { AppMetaData } from '@/types/app-meta'
import styles from '../styles/home.module.scss'

const { leadspace } = styles

type IProps = {
    appMetaData?: AppMetaData
}

const HomePage = (props: IProps) => {
    const { appMetaData } = props

    return (
        <section className={leadspace}>
            <div className="bx--grid">
                <div className="bx--row">
                    <div className="bx--col">
                        <h1>Welcome to {appMetaData?.title || AppConst.PRODUCT_TITLE}</h1>
                        <br />
                        <br />
                        {Boolean(appMetaData?.description) && <h2>{appMetaData?.description}</h2>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage