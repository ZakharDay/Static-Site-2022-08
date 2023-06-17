// import './A_Link.scss'
import classnames from 'classnames'
import React from 'react'

export default class A_Link extends React.Component {
  render() {
    const { text, type, active, url } = this.props

    const classes = classnames({
      A_Link: true,
      [`${type}`]: true,
      active: active
    })

    return (
      <a className={classes} href={url}>
        {text}
      </a>
    )
  }
}
