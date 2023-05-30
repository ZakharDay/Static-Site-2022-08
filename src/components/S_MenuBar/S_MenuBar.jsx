import './S_MenuBar.scss'
import React from 'react'
import { getPostTeasers } from '../../search_data.js'

import A_MainMenuItem from '../A_MainMenuItem/A_MainMenuItem.jsx'
import O_SearchBar from '../O_SearchBar/O_SearchBar.jsx'

const addressPart = ':8080/'
// const addressPart = '.adc.ac/'

const menu = [
  {
    text: 'Element 1',
    url: '/spaceobjects.html'
  },
  {
    text: 'Element 2',
    url: '/spaceobjects/moon.html'
  },
  {
    text: 'Element 3',
    url: '/spaceships.html'
  },
  {
    text: 'Element 4',
    url: '/spaceships/buran.html'
  }
]

export default class S_MenuBar extends React.Component {
  constructor(props) {
    super(props)

    const { searchInputValue } = props

    this.state = {
      isSearchButtonDisabled: true,
      postTeasers: [],
      searchInputValue
    }
  }

  componentDidMount() {
    getPostTeasers().then((data) => {
      this.setState({
        postTeasers: data
      })
    })
  }

  // вынести функцию в утилиты
  getPathFromUrl = (url) => {
    return url.split(addressPart)[0]
  }

  handleSearchInput = (searchInputValue) => {
    let isSearchButtonDisabled = true

    if (searchInputValue.length >= 3) {
      isSearchButtonDisabled = false
    }

    this.setState({
      isSearchButtonDisabled,
      searchInputValue
    })
  }

  handleSearchSubmit = () => {
    const { searchInputValue } = this.state

    if (searchInputValue.length >= 3) {
      const url = this.getPathFromUrl(window.location.href)

      window.location.href =
        url + addressPart + 'search.html?request=' + searchInputValue
    }
  }

  render() {
    const { isSearchButtonDisabled, searchInputValue, postTeasers } = this.state
    const url = this.getPathFromUrl(window.location.href)
    const menuElements = []

    menu.forEach((menuItem, i) => {
      const { text, url } = menuItem

      menuElements.push(
        <A_MainMenuItem text={text} url={url} current={false} key={i} />
      )
    })

    return (
      <>
        <a href={url + addressPart}>Home</a>

        <div className="C_MainMenu">{menuElements}</div>

        <O_SearchBar
          isSearchButtonDisabled={isSearchButtonDisabled}
          searchInputValue={searchInputValue}
          postTeasers={postTeasers}
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />
      </>
    )
  }
}
