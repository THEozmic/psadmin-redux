import React from 'react'
import InputText from './InputText'

const AuthorsList = ({ authors, updateHandler, removeHandler }) => {
  return (
    <React.Fragment>
      {authors.map(author => (
        <tr key={author.id}>
          <td>{author.id}</td>
          <td>
            <span className="pt-2 pb-2">
              <InputText
                value={author.name}
                id={author.id}
                handleChange={updateHandler}
              />
            </span>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => removeHandler(author.id)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </React.Fragment>
  )
}

export default AuthorsList
