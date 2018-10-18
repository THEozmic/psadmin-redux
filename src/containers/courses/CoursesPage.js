import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import toastr from 'toastr'
import CoursesList from './CoursesList'

import { removeAsync } from '../../modules/courses'

class CoursesPage extends Component {
  handleRemove = id => {
    toastr.success('Deleted')
    this.props.removeAsync(id)
  }

  render = () => {
    return (
      <div className="p-5">
        {this.props.courses.isUpdating && 'Updating...'}
        <h2>Courses</h2>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Category</th>
                <th scope="col">Length</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.courses && (
                <CoursesList
                  courses={this.props.courses}
                  removeHandler={this.handleRemove}
                />
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ courses }) => ({
  courses: courses.list
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeAsync
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage)
