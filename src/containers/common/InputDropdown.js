import React, { Component } from 'react'

class InputDropdown extends Component {
  state = {
    value: this.props.value
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })

    this.props.handleChange({ value: event.target.value })
  }
  render = () => {
    return (
      <select
        className="form-control"
        onChange={this.handleChange}
        value={this.state.value}>
        {this.props.authors.map(author => (
          <option key={author.id} value={author.name}>
            {author.name}
          </option>
        ))}
      </select>
    )
  }
}

export default InputDropdown
