import './M_SearchForm.scss'
import React from 'react'

import A_Input from '../A_Input/A_Input.jsx'
import A_Button from '../A_Button/A_Button.jsx'

export default class M_SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  handleInput = (value) => {
    this.setState({
      value
    })
  }

  handleSubmit = () => {
    console.log('Submit')
  }

  render() {
    const { value } = this.state

    return (
      <div className="M_SearchForm">
        <A_Input
          value={value}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />

        <A_Button text="Search" handleClick={this.handleSubmit} />
      </div>
    )
  }
}
