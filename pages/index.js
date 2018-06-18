import React, { Component } from 'react'
import Head from 'next/head'

import SVGSprites from '../components/SVGSprites/SVGSprites'
import Header from '../components/Header/Header';
import PeopleItemList from '../components/PeopleItemList/PeopleItemList';
import PeopleSelectorSelect from '../components/PeopleSelectorSelect/PeopleSelectorSelect';

export default class extends Component {
  state = {
    filterBy: 'Position',
    showList: true,
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout)
  }

  handleFilter = value => ( // Get filter value
    this.setState({ filterBy: value, showList: false }, () => {
      this.timeout = setTimeout(() => this.setState({ showList: true }), 100)
    })
  )

  render() {
    const { filterBy, showList } = this.state
    return (
      <div>
        <SVGSprites />
        <Head>
          <title>Auth0 - Members</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalabel=no, maximum-scale=1" />
          <link rel="icon" type="image/x-icon" href="static/images/favicon.png" />
        </Head>
        <Header handleFilter={this.handleFilter} filter={filterBy} />
        {showList &&
          <PeopleItemList filter={filterBy} />
        }
        <PeopleSelectorSelect handleFilter={this.handleFilter} filter={filterBy} />

        <style jsx global>{`
          @import './static/scss/variables';

        * {
            margin: 0;
            padding: 0;
            border: 0;
            list-style: none;
          }

          body {
            color: $black;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: 16px;
            background-color: $black;
            @media(max-width: $tabletMax) {
              padding-bottom: 78px;
            }
          }

          .container {
            max-width: 980px;
            margin: 0 auto;
            @media(max-width: $tabletMax) {
              padding: 0 #{$gutter * 2};
            }
            @media(max-width: $mobileMax) {
              padding: 0 $gutter;
            }
          }

          .hidden-mobile-down {
            @media(max-width: $mobileMax) {
              display: none !important;
            }
          }

          .hidden-tablet-down {
            @media(max-width: $tabletMax) {
              display: none !important;
            }
          }

          .hidden-desktop-up {
            @media(min-width: $desktopMin) {
              display: none !important;
            }
          }

          @for $i from 1 to 3 {
            .air-#{$i} {
              margin-bottom: #{ $i * $gutter};
            }
          }

        `}</style>
      </div>
    )
  }
}
