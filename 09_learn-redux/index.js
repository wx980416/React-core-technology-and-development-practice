const redux = require('redux')

const defautStore = {
  counter: 0,
}

function reducer(state = defautStore, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, counter: state.counter + 1 }
    case 'DEL':
      return { ...state, counter: state.counter + action.num }
    default:
      break
  }
}

const store = redux.createStore(reducer)

const action1 = { type: 'ADD' }
const action2 = { type: 'DEL', num: 1 }

store.dispatch(action1)
store.dispatch(action2)

store.subscribe(() => {
  console.log('counter', store.getState().counter)
})
