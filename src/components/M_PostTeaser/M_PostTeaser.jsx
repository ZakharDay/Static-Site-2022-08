// import './M_PostTeaser.scss'
import React from 'react'

import A_Image from '../A_Image/A_Image.jsx'
import A_Text from '../A_Text/A_Text.jsx'

export default class M_PostTeaser extends React.Component {
  render() {
    const { title, tags, image, description, url } = this.props
    const tagElements = []

    tags.forEach((tag, i) => {
      tagElements.push(<A_Text type="tag" text={tag} key={i} />)
    })

    return (
      <a className="M_PostTeaser" href={url}>
        <A_Image type="postTeaser" src={image} />
        <div className="C_PostTeaserTags">{tagElements}</div>
        <A_Text type="h3" text={title} />
        <A_Text type="p" text={description} />
      </a>
    )
  }
}
