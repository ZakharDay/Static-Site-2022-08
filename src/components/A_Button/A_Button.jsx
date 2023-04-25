import './A_Button.scss'
import React from 'react'

export default class A_Button extends React.Component {
  render() {
    const { text, handleClick } = this.props

    return (
      <div className="A_Button" onClick={handleClick}>
        {text}
      </div>
    )
  }
}
