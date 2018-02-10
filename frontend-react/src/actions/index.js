import {apiPostTodo, apiGetTodos, apiPostToggleTodo} from '../api';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const LOAD_TODOS = 'LOAD_TODOS';

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

export function createTodo(text) {
    return function(dispatch) {
        apiPostTodo(text).then((response) => dispatch(loadTodos(response.data)));
    }
}

function loadTodos(todos) {
    return {
        type: LOAD_TODOS,
        todos
    }
}

export function fetchTodos() {
    return function(dispatch) {
        apiGetTodos().then((response) => {
            console.log(response.data);
            dispatch(loadTodos(response.data));
        })
    }
}

export function postToggleTodo(uuid) {
    console.log("postToggleTodo", uuid);

    return function(dispatch) {
        apiPostToggleTodo(uuid).then((response) => {

            console.log(response);
        dispatch(toggleTodo(uuid))})
    }
}
