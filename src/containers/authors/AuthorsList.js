import React from 'react'

const AuthorsList = ({ authors }) => {
  return (
    <React.Fragment>
      {this.props.authors.map(author => (
        <tr key={author.id}>
          <td>{author.id}</td>
          <td>{author.name}</td>
          <td>
            <button onClick={() => this.props.updateAuthor(author.id)}>
              Edit
            </button>
            <button onClick={() => this.props.deleteAuthor(author.id)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </React.Fragment>
  )
}

export default AuthorsList
