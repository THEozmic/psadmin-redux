export const REMOVE_REQUESTED = 'courses/REMOVE_REQUESTED'
export const REMOVE = 'courses/REMOVE'
export const UPDATE_REQUESTED = 'courses/UPDATE_REQUESTED'
export const UPDATE = 'courses/UPDATE'
export const GET_COURSE = 'courses/GET_COURSE'

const initialState = {
  list: [
    {
      id: 'clean-code',
      title: 'Clean Code: Writing Code for Humans',
      author: 'Cory House',
      length: '3:10',
      category: 'Software Practices'
    },
    {
      id: 'architecture',
      title: 'Architecting Applications for the Real World',
      author: 'Cory House',
      length: '2:52',
      category: 'Software Architecture'
    },
    {
      id: 'career-reboot-for-developer-mind',
      title: 'Becoming an Outlier: Reprogramming the Developer Mind',
      author: 'Cory House',
      length: '2:30',
      category: 'Career'
    },
    {
      id: 'web-components-shadow-dom',
      title: 'Web Component Fundamentals',
      author: 'Cory House',
      length: '5:10',
      category: 'HTML5'
    }
  ],
  course: {},
  isUpdating: false,
  isRemoving: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_REQUESTED:
      return {
        ...state,
        isRemoving: true
      }

    case REMOVE:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.data.id),
        isRemoving: !state.isRemoving
      }

    case UPDATE_REQUESTED:
      return {
        ...state,
        isUpdating: true
      }

    case UPDATE:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.data.changes.id) {
            return { ...item, ...action.data.changes }
          } else {
            return item
          }
        }),
        selectedCourse: { ...state.selectedCourse, ...action.data.changes },
        isUpdating: !state.isRemoving
      }

    case GET_COURSE:
      return {
        ...state,
        selectedCourse: action.data.selectedCourse
      }

    default:
      return state
  }
}

export const getCourse = id => {
  return dispatch => {
    dispatch({
      type: GET_COURSE,
      data: {
        selectedCourse: initialState.list.find(item => item.id === id)
      }
    })
  }
}

export const removeAsync = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: REMOVE,
        data: {
          id,
          isRemoving: false
        }
      })
    }, 0)
  }
}

export const updateAsync = fields => {
  return dispatch => {
    dispatch({
      type: UPDATE_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: UPDATE,
        data: {
          changes: fields,
          isUpdating: false
        }
      })
    }, 0)
  }
}
