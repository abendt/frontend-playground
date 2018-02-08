import {ADD_TODO, TOGGLE_TODO} from '../actions';
import Immutable from 'immutable';

export const todo = (id, text, completed) => Immutable.Map({id, text, completed})

export const toggle = (todo) => todo.set('completed', !todo.get('completed'))

export const todos = (state = Immutable.List(), action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.push(todo(action.id, action.text, false))

    case TOGGLE_TODO:
      return state.map(todo =>
         (todo.get('id') === "id")
         ? toggle(todo)
         : todo)

    default:
      return state
  }
}