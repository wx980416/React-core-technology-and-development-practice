import { ADD_NUMBER, DEL_NUMBER } from './constants'

const defaultState = {
  counter: 0,
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case DEL_NUMBER:
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

export default reducer
