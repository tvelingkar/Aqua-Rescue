

import Link from 'next/link'

import './exception.module.scss'

export interface ExceptionProps {
  buttonUrl?: string
  buttonText?: string
  errorCode: number
  errorStatusText: string
  title: string
  subtitle: string
}

export const Exception = (props: ExceptionProps) => {
  const { buttonUrl, buttonText, errorCode, errorStatusText, title, subtitle } = props

  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-sm-4 bx--col-md-6 bx--col-lg-8">
          <div className="bx--row">
            <div className="bx--col">
              <br />
              <br />
              <p>
                {errorCode} / {errorStatusText}
              </p>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col">
              <br />
              <br />
              <h4>{title}</h4>
              <br />
              <br />
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col">
              <p>{subtitle}</p>
              <br />
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col">
              <Link href={buttonUrl || '/'}>{buttonText}</Link>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col">
              <br />
              <br />
              <br />
              <p>
                Still need help? Our&nbsp;<a href="/support">Support Center</a>&nbsp;might have the answers you seek.
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
