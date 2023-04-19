import React, { Component } from 'react'

import A_Title from './A_Title.jsx'
import M_Card from './M_Card.jsx'

export default class O_Schedule extends Component {
  render() {
    const { mainTitle, events } = this.props

    const cards = events.map((event, i) => {
      return (
        <M_Card title={event.title} description={event.description} key={i} />
      )
    })

    return (
      <div className="O_Schedule">
        <A_Title text={mainTitle} />
        {cards}
      </div>
    )
  }
}
