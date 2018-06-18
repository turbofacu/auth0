import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Reveal from 'react-reveal/Reveal'

import PeopleSelectorDropdown from '../PeopleSelectorDropdown/PeopleSelectorDropdown';

export default class Header extends Component {
  static propTypes = {
    handleFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  }

  state = {
    animate: false,
  }

  render() {
    const { animate } = this.state
    const { handleFilter, filter } = this.props

    return (
      <div className="header-container container">
        <Reveal onReveal={() => this.setState({ animate: true })}>
          <div className={cn('header-animate', { animate })}>
            <header className="header">
              <a className="auth0-logo-link" href="https://www.auth0.com" target="_blank" rel="noopener noreferrer">
                <svg className="auth0-logo" viewBox="0 0 256 287" width="256px" height="287px">
                  <use xlinkHref="#auth0-logo"></use>
                </svg>
              </a>
              <PeopleSelectorDropdown handleFilter={handleFilter} filter={filter} />
            </header>
          </div>
        </Reveal>
        <style jsx>{`
          @import './static/scss/variables';

          .header-container {
            position: relative;
            z-index: 5;
          }

          .header-animate {
            &.animate {
              .header {
                opacity: 1;
              }
            }
          }

          .header {
            height: 86px;
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity $animDur ease-out;
            @media(max-width: $tabletMax) {
              justify-content: center;
            }
          }

          .auth0-logo {
            width: auto;
            height: 35px;
            fill: white;
            transition: fill $animDur ease-out;
            &:hover {
              fill: #EB5424;
            }
          }
        `}</style>

      </div>
    )
  }
}
