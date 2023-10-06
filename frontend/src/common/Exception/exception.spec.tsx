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
import { render } from '@testing-library/react'
import { AppConst } from '@/constants/app'
import { EXCEPTION_MAP } from '@/constants/exception'

import Exception from '.'

describe('Exception', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Exception
        buttonUrl={AppConst.HOME_PAGE_URL}
        buttonText="Go back home"
        errorCode={500}
        errorStatusText={EXCEPTION_MAP[500].statusText}
        title={EXCEPTION_MAP[500].title}
        subtitle={EXCEPTION_MAP[500].subtitle}
      />,
    )
    expect(baseElement).toBeTruthy()
  })
})
