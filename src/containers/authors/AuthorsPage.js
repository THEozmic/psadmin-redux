import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AuthorsList from './AuthorsList'

import { removeAsync, updateAsync } from '../../modules/authors'

class AuthorsPage extends Component {
  render = () => {
    return (
      <div className="p-5">
        {this.props.authors.isUpdating && 'Updating...'}
        <h2>Authors</h2>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.authors && (
                <AuthorsList
                  authors={this.props.authors}
                  updateHandler={this.props.updateAsync}
                  removeHandler={this.props.removeAsync}
                />
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ authors }) => ({
  authors: authors.list
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeAsync,
      updateAsync
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorsPage)
