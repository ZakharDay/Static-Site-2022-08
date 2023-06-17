// import './S_MenuBar.scss'
import React from 'react'
import { getPostTeasers } from '../../search_data.js'

import A_Link from '../A_Link/A_Link.jsx'
import O_SearchBar from '../O_SearchBar/O_SearchBar.jsx'

export default class S_MenuBar extends React.Component {
  constructor(props) {
    super(props)

    const searchInputValue = props.prerender ? '' : props.searchInputValue

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
    const { prerender } = this.props
    const { searchInputValue } = this.state

    if (prerender == undefined) {
      if (searchInputValue.length >= 3) {
        const url = this.getPathFromUrl(window.location.href)
        window.location.href =
          url + addressPart + 'search.html?request=' + searchInputValue
      }
    }
  }

  render() {
    const { prerender, homeURL, menuItems } = this.props
    const { isSearchButtonDisabled, searchInputValue, postTeasers } = this.state
    const currentURL = prerender == undefined ? window.location.href : ''
    const menuElements = []

    menuItems.forEach((menuItem, i) => {
      const { text, url } = menuItem
      const linkURL = homeURL + url

      menuElements.push(
        <A_Link
          text={text}
          type="mainMenuItem"
          active={linkURL == currentURL}
          url={linkURL}
          key={i}
        />
      )
    })

    return (
      <>
        <A_Link text="Home" type="menubarLogo" url={homeURL} active={false} />

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
