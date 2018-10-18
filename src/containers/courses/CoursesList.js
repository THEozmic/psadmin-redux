import React from 'react'
import { Link } from 'react-router-dom'

const CoursesList = ({ courses, removeHandler }) => {
  return (
    <React.Fragment>
      {courses.map(course => (
        <tr key={course.id}>
          <td>{course.title}</td>
          <td>{course.author}</td>
          <td>{course.category}</td>
          <td>{course.length}</td>
          <td>
            <Link className="btn btn-primary" to={`courses/edit/${course.id}`}>
              Update
            </Link>{' '}
            <button
              className="btn btn-danger"
              onClick={() => removeHandler(course.id)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </React.Fragment>
  )
}

export default CoursesList
