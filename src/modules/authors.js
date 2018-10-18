export const REMOVE_REQUESTED = 'authors/REMOVE_REQUESTED'
export const REMOVE = 'authors/REMOVE'
export const UPDATE_REQUESTED = 'authors/UPDATE_REQUESTED'
export const UPDATE = 'authors/UPDATE'

const initialState = {
  list: [
    { name: 'Michael Ozoemena', id: 1234 },
    { name: 'Cory House', id: 2345 }
  ],
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
        list: state.list.filter(item => item.id != action.data.id),
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
          if (item.id == action.data.list.id) {
            return action.data.list
          } else {
            return item
          }
        }),
        isUpdating: !state.isRemoving
      }

    default:
      return state
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

export const updateAsync = ({ name, id }) => {
  return dispatch => {
    dispatch({
      type: UPDATE_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: UPDATE,
        data: {
          list: {
            name,
            id
          },
          isUpdating: false
        }
      })
    }, 0)
  }
}
