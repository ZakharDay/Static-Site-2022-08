import './A_Image.scss'
import classnames from 'classnames'
import React from 'react'

export default class A_Image extends React.Component {
  render() {
    const { src, type } = this.props

    const classes = classnames({
      A_Image: true,
      [`${type}`]: true
    })

    return <img className={classes} src={src} />
  }
}
