import { combineReducers } from 'redux'
import authors from './authors'
import courses from './courses'

export default combineReducers({
  authors,
  courses
})
