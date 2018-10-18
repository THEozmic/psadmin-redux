import React, { Component } from 'react'

class InputText extends Component {
  state = {
    value: this.props.value
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })

    this.props.handleChange({
      value: event.target.value
    })
  }

  render = () => {
    return (
      <input
        className="form-control"
        value={this.state.value}
        id={this.props.id || null}
        onChange={this.handleChange}
      />
    )
  }
}

export default InputText
