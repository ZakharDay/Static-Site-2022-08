import './O_SearchBar.scss'
import React from 'react'
import { getPostTeasers } from '../../search_data.js'

import M_SearchForm from '../M_SearchForm/M_SearchForm.jsx'
import M_PostTeaser from '../M_PostTeaser/M_PostTeaser.jsx'

const addressPart = ':8080/'
// const addressPart = '.adc.ac/'

export default class O_SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSearchButtonDisabled: true,
      searchInputValue: '',
      postTeasers: []
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
      const { searchInputValue } = this.state
      const url = this.getPathFromUrl(window.location.href)

      window.location.href =
        url + addressPart + 'search.html?request=' + searchInputValue
    }
  }

  renderPostTeasers = () => {
    const { postTeasers } = this.state
    const searchInputValue = this.state.searchInputValue.toLowerCase()
    const nbspRegex = /[\u202F\u00A0]/gm
    const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/gm
    const posts = []

    postTeasers.forEach((postTeaser) => {
      const title = postTeaser.title
        .replaceAll(nbspRegex, ' ')
        .replaceAll(punctuationRegex, '')
        .toLowerCase()

      const description = postTeaser.description
        .replaceAll(nbspRegex, ' ')
        .replaceAll(punctuationRegex, '')
        .toLowerCase()

      if (
        title.includes(searchInputValue) ||
        description.includes(searchInputValue)
      ) {
        posts.push(
          <M_PostTeaser
            title={postTeaser.title}
            description={postTeaser.description}
            url={postTeaser.url}
            key={postTeaser.id}
          />
        )
      }
    })

    return <div className="C_PostTeasers">{posts}</div>
  }

  render() {
    const { isSearchButtonDisabled, searchInputValue } = this.state

    return (
      <div className="O_SearchBar">
        <M_SearchForm
          isSearchButtonDisabled={isSearchButtonDisabled}
          searchInputValue={searchInputValue}
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />

        {searchInputValue.length >= 3 && this.renderPostTeasers()}
      </div>
    )
  }
}
