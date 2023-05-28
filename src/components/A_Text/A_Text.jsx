import './A_Text.scss'
import classnames from 'classnames'
import React from 'react'

export default class A_Text extends React.Component {
  render() {
    const { text, type } = this.props

    const classes = classnames({
      A_Text: true,
      [`${type}`]: true
    })

    return <div className={classes}>{text}</div>
  }
}
