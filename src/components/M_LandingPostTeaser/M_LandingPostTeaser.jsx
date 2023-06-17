import React from 'react'

export default class M_LandingPostTeaser extends React.Component {
  render() {
    const { title, image, url } = this.props

    return (
      <a className="M_LandingPostTeaser" href={url}>
        <img src={image} />
        <h3>{title}</h3>
      </a>
    )
  }
}
