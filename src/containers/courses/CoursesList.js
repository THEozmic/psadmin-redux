import React from 'react'
import InputDropdown from './InputDropdown'

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
