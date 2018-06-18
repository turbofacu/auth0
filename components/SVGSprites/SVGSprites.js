import React, { PureComponent } from 'react'

export default class SVGSprites extends PureComponent {
  render() {
    return (
      <svg style={{ display: 'none' }}>
        <defs>

          <symbol id="auth0-logo"> {/* viewBox="0 0 256 287" */}
            <path d="M203.240327,231.531381 L174.50906,143.097054 L249.718479,88.4564937 L156.751944,88.4564937 L128.018972,0.0255767952 L128.010446,0.00170511968 L220.990622,0.00170511968 L249.730415,88.4479681 L249.73212,88.446263 L249.755991,88.432622 C266.445703,139.743083 249.256391,198.10251 203.240327,231.531381 L203.240327,231.531381 Z M52.7907966,231.531381 L52.7669249,231.548432 L127.9951,286.202633 L203.240327,231.533086 L128.018972,176.87718 L52.7907966,231.531381 L52.7907966,231.531381 Z M6.29388802,88.4343271 L6.29388802,88.4343271 C-11.2756652,142.522429 9.11927133,199.834911 52.7754505,231.541612 L52.782271,231.51433 L81.5169479,143.085118 L6.32458017,88.4547886 L99.2689489,88.4547886 L128.003626,0.0238716755 L128.010446,2.84217094e-14 L35.0251546,2.84217094e-14 L6.29388802,88.4343271 L6.29388802,88.4343271 Z" />
          </symbol>

          <symbol id="arrow-down"> {/* viewBox="0 0 255 255" */}
            <polygon points="0,63.75 127.5,191.25 255,63.75" />
          </symbol>

        </defs>
      </svg>
    )
  }
}
