// import './A_Button.scss'
import classnames from 'classnames'
import React from 'react'

export default class A_Button extends React.Component {
  render() {
    const { text, disabled, type, handleClick } = this.props

    const classes = classnames({
      A_Button: true,
      disabled: disabled,
      [`${type}`]: true
    })

    return (
      <div className={classes} onClick={handleClick}>
        {text}
      </div>
    )
  }
}
