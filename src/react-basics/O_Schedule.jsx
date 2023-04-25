import React, { Component } from 'react'

import A_Title from './A_Title.jsx'
import A_Button from './A_Button.jsx'
import M_Card from './M_Card.jsx'

export default class O_Schedule extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState, this.state)
  }

  handleClick = () => {
    console.log('O_Schedule handleClick')

    const { counter } = this.state

    this.setState({
      counter: counter + 1
    })

    // const counter = this.state.counter + 1

    // this.setState({
    //   counter
    // })

    // let { counter } = this.state
    // counter += 1

    // this.setState({
    //   counter
    // })
  }

  render() {
    console.log('Render')

    const { mainTitle, events } = this.props
    const { counter } = this.state

    const cards = events.map((event, i) => {
      return (
        <M_Card title={event.title} description={event.description} key={i} />
      )
    })

    return (
      <div className="O_Schedule">
        <A_Title text={mainTitle + ' ' + counter} />

        {cards}

        <A_Button
          text="Click"
          type="primary"
          isOn={true}
          handleClick={this.handleClick}
        />

        <A_Button
          text="Click"
          type="secondary"
          isOn={false}
          handleClick={this.handleClick}
        />

        <A_Button
          text="Click"
          type="icon"
          isOn={false}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}
