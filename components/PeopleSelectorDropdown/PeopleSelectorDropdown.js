import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

export default class PeopleSelectorDropdown extends Component {
  static propTypes = {
    handleFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  }

  handleClick = (filter) => {
    const { handleFilter } = this.props
    handleFilter(filter)
  }

  filterActive = (activeFilter) => {
    const { filter } = this.props
    if (activeFilter === filter) {
      return 'active'
    }
    return ''
  }

  render() {
    const { filter } = this.props

    return (
      <div className="selector hidden-tablet-down">
        <div className="selector-title">
          <span className="selector-title-text">{filter !== 'Position' ? 'Filtered' : 'Filter'} by <strong>{filter}</strong></span>
          <svg className="selector-title-arrow" viewBox="0 0 255 255" width="10px" height="10px">
            <use xlinkHref="#arrow-down"></use>
          </svg>
        </div>
        <ul className="selector-list">
          <li className={cn('selector-item', this.filterActive('All'), filter === 'Position' ? 'active' : '')} onClick={() => this.handleClick('All')}>All</li>
          <li className={cn('selector-item', this.filterActive('Marketer'))} onClick={() => this.handleClick('Marketer')}>Marketer</li>
          <li className={cn('selector-item', this.filterActive('Engineer'))} onClick={() => this.handleClick('Engineer')}>Engineer</li>
          <li className={cn('selector-item', this.filterActive('Devops'))} onClick={() => this.handleClick('Devops')}>Devops</li>
        </ul>
        <style jsx>{`
          @import './static/scss/variables';
          @import './static/scss/extends';

          .selector {
            color: white;
            font-size: 20px;
            text-align: right;
            min-width: 250px;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            position: relative;
            z-index: 3;
            &:hover {
              .selector-list {
                opacity: 1;
                transform: translate3d(0, 0, 0);
                pointer-events: all;
              }
            }
            &-title {
              display: flex;
              align-items: center;
              align-content: center;
              justify-content: flex-end;
              &-arrow {
                fill: white;
                margin-left: $gutter;
              }
              &-text {
                user-select: none;
                line-height: 30px;
                height: 30px;
                display: block;
              }
            }
            &-list {
              position: absolute;
              top: calc(100% - #{$gutter});
              left: 0;
              right: 0;
              opacity: 0;
              box-shadow: 2px 2px 10px 2px rgba(50, 50, 50, 0.4);
              overflow: hidden;
              transform: translate3d(0, -5px, 0);
              transition: all $animDur ease-out;
              pointer-events: none;
            }
            &-item {
              background-color: rgba(lighten($black, 5%), 0.9);
              padding: $gutter;
              transition: all $animDur ease-out;
              cursor: pointer;
              &.active {
                color: $black;
                background-color: white;
                pointer-events: none;
              }
              &:first-child {
                border-radius: 4px 4px 0 0;
              }
              &:last-child {
                border-radius: 0 0 4px 4px;
              }
              &:not(:last-child) {
                border-bottom: 1px solid white;
              }
              &:hover {
                color: $black;
                background-color: white;
              }
            }
          }
        `}</style>
      </div>
    )
  }
}
