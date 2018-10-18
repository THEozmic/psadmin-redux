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
      name: event.target.value,
      id: event.target.id
    })
  }

  render = () => {
    return (
      <input
        className="form-control"
        value={this.state.value}
        id={this.props.id}
        onChange={this.handleChange}
      />
    )
  }
}

export default InputText
