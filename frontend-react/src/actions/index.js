export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    text
  }
}
