import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = ({ authors, updateHandler, removeHandler }) => {
  return (
    <div className="p-3">
      <h1>404 Not Found</h1>
      <small>The page you are looking for doesn't exist</small>
      <br />
      <br />

      <Link className="btn btn-primary" role="button" to="/">
        Home
      </Link>
    </div>
  )
}

export default NotFoundPage
