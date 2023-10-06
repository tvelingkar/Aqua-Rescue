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
import React from 'react'
import { AppConst } from '@/constants/app'
import { EXCEPTION_MAP } from '@/constants/exception'
import { EnvUtil } from '@/utils/env'
import Exception from '@/common/Exception'

type IState = {
  hasError: boolean
}

type IProps = {
  children: React.ReactNode
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  state = { hasError: false }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentDidCatch(error: Error, errorInfo: any) {
    if (EnvUtil.NODE_ENV !== 'production') {
      console.error({ error, errorInfo })
    }
    this.setState({ hasError: true })
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Exception
          buttonUrl={AppConst.HOME_PAGE_URL}
          buttonText="Go back home"
          errorCode={500}
          errorStatusText={EXCEPTION_MAP[500].statusText}
          title={EXCEPTION_MAP[500].title}
          subtitle={EXCEPTION_MAP[500].subtitle}
        />
      )
    }

    // Return children components in case of no error
    return this.props.children
  }
}
