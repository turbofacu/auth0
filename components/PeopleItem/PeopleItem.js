import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Reveal from 'react-reveal/Reveal'

export default class PeopleItem extends Component {
  static propTypes = {
    people: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
    ])).isRequired,
    animatePosition: PropTypes.string.isRequired,
  }

  state = {
    animate: false,
  }

  render() {
    const { animate } = this.state
    const { people, animatePosition } = this.props

    return (
      <li>
        <Reveal onReveal={() => this.setState({ animate: true })}>
          <div className={cn('people-animate', { animate })}>
            <div className={cn('people-item air-1', animatePosition)}>
              <div className="people-item-content">
                <div className="people-item-column">
                  <div className="people-item-name air-1">{people.name}</div>
                  <span className="people-item-position">{people.position}</span>
                </div>
                <img
                  className="people-item-avatar"
                  src={`static/images/people/${people.src}`}
                  alt={`of ${people.name}`}
                />
                <img
                  className="people-item-background"
                  src={`static/images/people/${people.background}`}
                  alt={`Brackground for ${people.name}`}
                />
              </div>
            </div>
          </div>
        </Reveal>
        <style jsx>{`
          @import './static/scss/variables';
          @import './static/scss/extends';

          .people-animate {
            &.animate {
              .people-item {
                opacity: 1;
                transform: translate3d(0, 0, 0);
              }
            }
          }

          .people-item {
            border-radius: 4px;
            position: relative;
            overflow: hidden;
            opacity: 0;
            transform: translateZ(0);
            transition: all $animDur ease-out;
            @media(min-width: $tabletMin) {
              min-height: 275px;
            }
            &:hover {
              box-shadow: 2px 2px 10px 2px rgba(50, 50, 50, 0.4);
              .people-item-background {
                transform: scale(1.1, 1.1) translateZ(0);
                filter: blur(8px);
              }
              .people-item-avatar {
                transform: scale(1.05, 1.05) translateZ(0);
              }
            }
            &.right {
              transform: translate3d(#{$gutter}, 0, 0);
            }
            &.left {
              transform: translate3d(#{$gutter * -1}, 0, 0);
            }
            &-content {
              padding: #{$gutter * 2};
              box-sizing: border-box;
              @media(max-width: $mobileMax) {
                display: flex;
                flex-direction: column;
                align-content: center;
                align-items: center;
                justify-content: center;
                padding: #{$gutter * 3} #{$gutter * 2};
              }
            }
            &-column {
              max-width: 100%;
              display: flex;
              flex-direction: column;
              position: relative;
              z-index: 2;
              @media(max-width: $mobileMax) {
                order: 2;
                align-items: center;
              }
            }
            &-name, &-position {
              max-width: 100%;
              display: block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            &-name {
              font-size: 32px;
            }
            &-position {
              color: #748187;
              font-size: 20px;
            }
            &-avatar {
              width: 100px;
              height: 100px;
              border-radius: 100%;
              box-shadow: 2px 2px 10px 2px rgba(50, 50, 50, 0.4);
              position: relative;
              z-index: 2;
              order: 1;
              transform: scale(1, 1) translateZ(0);
              transition: all $animDur cubic-bezier(0, 0, 0, 1.51);
              @media(min-width: $tabletMin) {
                position: absolute;
                top: calc(50% - 100px / 2);
                left: calc(50% - 100px / 2);
              }
              @media(max-width: $mobileMax) {
                margin-bottom: #{$gutter * 2};
              }
            }
            &-background {
              position: absolute;
              @extend %all-corners;
              transform: scale(1, 1);
              transition: all #{$animDur / 2} ease-out;
              will-change: transform;
            }
          }
        `}</style>
      </li>
    )
  }
}
