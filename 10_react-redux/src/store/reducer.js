import {
  ADD_NUMBER,
  DEL_NUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
} from './constants'

const defaultState = {
  counter: 0,
  banners: [],
  recommends: [],
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case DEL_NUMBER:
      return { ...state, counter: state.counter - action.num }
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners }
    case CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}

export default reducer
