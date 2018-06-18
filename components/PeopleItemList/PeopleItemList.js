import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { People as people } from '../../lib/People'

import PeopleItem from '../PeopleItem/PeopleItem'

export default class PeopleItemList extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
  }

  render() {
    const { filter } = this.props

    return (
      <div className="container">
        <ul className="people-flex">
          {people.filter(peopleFilter => peopleFilter.position === filter || filter === 'All' || filter === 'Position').map((peopleItem, i) => (
            <PeopleItem
              people={peopleItem}
              key={i}
              animatePosition={i % 2 ? 'left' : 'right'}
            />
          ))}
        </ul>
        <style jsx>{`
          .people-flex {
            display: flex;
            flex-direction: column;
            align-content: center;
          }
        `}</style>
      </div>
    )
  }
}
