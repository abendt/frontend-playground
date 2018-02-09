export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
const uuidv1 = require('uuid/v1');

// https://redux.js.org/docs/basics/Actions.html

export function addTodo(text) {
  return {
    id: uuidv1(),
    type: ADD_TODO,
    text
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}
