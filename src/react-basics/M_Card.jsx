import React from 'react'

import A_Title from './A_Title.jsx'

export default class M_Card extends React.Component {
  render() {
    const { title, description } = this.props

    return (
      <div className="M_Card">
        <A_Title text={title} />
        <p>{description}</p>
      </div>
    )
  }
}
