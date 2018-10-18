import React, { Component } from 'react'
import AuthorsList from './AuthorsList'

class AuthorsPage extends Component {
  state = {}

  render = () => {
    return (
      <React.Fragment>
        <h2>Authors</h2>
        <div>
          <AuthorsList authors={this.props.authors} />
        </div>
      </React.Fragment>
    )
  }
}

export default AuthorsPage
