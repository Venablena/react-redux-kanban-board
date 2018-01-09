import { combineReducers } from 'redux'
import { START_DOING } from '../actions'

const INITIAL_STATE =  [
  {task: 'task A'},
  {task: 'task B'}
]

const todo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'START_DOING':
      return state.map(e => ({...e}))
                  .filter(e => e.task !== action.payload.task)
    default:
      return state
  }
}

const doing = (state = [], action) => {
  switch (action.type) {
    case 'START_DOING':
      return [...state.map(e => ({...e})), action.payload]
    default:
      return state
  }
}

const done = (state = [], action) => {
  switch (action.type) {
    case 'DONE':
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
    todo,
    doing,
    done
})
