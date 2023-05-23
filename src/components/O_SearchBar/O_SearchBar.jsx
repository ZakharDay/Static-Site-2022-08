import './O_SearchBar.scss'
import React from 'react'
import { getPostTeasers } from '../../search_data.js'

import M_SearchForm from '../M_SearchForm/M_SearchForm.jsx'

export default class O_SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      postTeasers: []
    }
  }

  // to commit

  componentDidMount() {
    getPostTeasers().then((data) => {
      this.setState({
        postTeasers: data
      })
    })
  }

  render() {
    console.log('Render', this.state.postTeasers)

    const { postTeasers } = this.state

    const posts = []

    postTeasers.forEach((teaser) => {
      posts.push(<div>{teaser.title}</div>)
    })

    return (
      <div className="O_SearchBar">
        <M_SearchForm />
        {posts}
      </div>
    )
  }
}
