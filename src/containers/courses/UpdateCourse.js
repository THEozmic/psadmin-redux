import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import InputText from '../common/InputText'
import InputDropdown from '../common/InputDropdown'
import toastr from 'toastr'
import { updateAsync, getCourse } from '../../modules/courses'

class UpdateCourse extends Component {
  state = {
    fields: {},
    updated: false
  }

  componentWillMount = () => {
    console.log(this.props)
    this.props.getCourse(this.props.match.params.id)
    if (!this.props.selectedCourse) {
      return false
    }
  }

  handleChange = field => {
    this.setState(prevState => ({
      fields: { ...prevState.fields, [field.name]: field.value }
    }))
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState(
      prevState => ({
        fields: { ...prevState.fields, id: this.props.selectedCourse.id },
        updated: true
      }),
      () => {
        toastr.success('Updated')
        this.props.updateAsync(this.state.fields)
      }
    )
  }

  render = () => {
    const selectedCourse = this.props.selectedCourse
    return (
      <div className="p-5">
        {this.state.updated && <Redirect to="/courses" />}
        {selectedCourse &&
          this.props.authors.list && (
            <React.Fragment>
              <h2>Update Course ({selectedCourse.title})</h2>
              <hr />
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <InputText
                    value={selectedCourse.title}
                    handleChange={({ value }) =>
                      this.handleChange({ name: 'title', value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="author">Author</label>
                  <InputDropdown
                    value={selectedCourse.author}
                    authors={this.props.authors.list}
                    handleChange={({ value }) =>
                      this.handleChange({ name: 'author', value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <InputText
                    value={selectedCourse.category}
                    handleChange={({ value }) =>
                      this.handleChange({ name: 'category', value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="length">Length</label>
                  <InputText
                    value={selectedCourse.length}
                    handleChange={({ value }) =>
                      this.handleChange({ name: 'length', value })
                    }
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </React.Fragment>
          )}
      </div>
    )
  }
}

const mapStateToProps = ({ courses, authors }) => ({
  selectedCourse: courses.selectedCourse,
  authors
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateAsync,
      getCourse
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateCourse)
