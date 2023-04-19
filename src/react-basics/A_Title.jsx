import React from 'react'

export default class A_Title extends React.Component {
  render() {
    const { text } = this.props
    return <div className="A_Title">{text}</div>
  }
}
