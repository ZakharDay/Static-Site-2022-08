import './A_MainMenuItem.scss'
import classnames from 'classnames'
import React from 'react'

export default class A_MainMenuItem extends React.Component {
  render() {
    const { text, url, current } = this.props

    const classes = classnames({
      A_MainMenuItem: true,
      current: current
    })

    return (
      <a className={classes} href={url}>
        {text}
      </a>
    )
  }
}
