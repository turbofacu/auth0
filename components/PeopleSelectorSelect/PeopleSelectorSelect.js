import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PeopleSelector extends Component {
  static propTypes = {
    handleFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  }

  handleChange = (filter) => {
    const { handleFilter } = this.props
    handleFilter(filter)
    window.scrollTo(0, 0)
  }

  render() {
    const { filter } = this.props

    return (
      <div className="selector hidden-desktop-up">
        <div className="selector-title">
          <span className="selector-title-text">{filter !== 'Position' ? 'Filtered' : 'Filter'} by <strong>{filter}</strong></span>
          <svg className="selector-title-arrow" viewBox="0 0 255 255" width="10px" height="10px">
            <use xlinkHref="#arrow-down"></use>
          </svg>
        </div>
        <form className="selector-form">
          <select
            className="selector-select"
            ref={ip => this.input = ip}
            onChange={evt => this.handleChange(evt.target.value)}
          >
            <option value="All">All</option>
            <option value="Marketer">Marketer</option>
            <option value="Engineer">Engineer</option>
            <option value="Devops">Devops</option>
          </select>
        </form>
        <style jsx>{`
          @import './static/scss/variables';
          @import './static/scss/extends';
          .selector {
            background-color: white;
            padding: 24px;
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 4;
            box-shadow: 2px -2px 10px 2px rgba(50, 50, 50, 0.4);
            &-title {
              display: flex;
              align-items: center;
              align-content: center;
              justify-content: center;
              &-arrow {
                fill: $black;
                margin-left: $gutter;
              }
              &-text {
                user-select: none;
                font-size: 18px;
                line-height: 30px;
                height: 30px;
                display: block;
                cursor: pointer;
              }
            }
            &-select {
              width: 100%;
              opacity: 0;
              position: absolute;
              @extend %all-corners;
            }
          }
        `}</style>
      </div>
    )
  }
}
