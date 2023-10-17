
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
