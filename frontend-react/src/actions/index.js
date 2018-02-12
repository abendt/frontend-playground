import api from '../api';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const LOAD_TODOS = 'LOAD_TODOS';

const uuidv1 = require('uuid/v1');

// https://redux.js.org/docs/basics/Actions.html

const addTodo = (text) => {
  return {
    id: uuidv1(),
    type: ADD_TODO,
    text
  }
}

const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

const createTodo = (text) => {
    return function(dispatch) {
        api.apiPostTodo(text).then((response) => dispatch(loadTodos(response.data)));
    }
}

const loadTodos = (todos) => {
    return {
        type: LOAD_TODOS,
        todos
    }
}

export const fetchTodos = () => {
    return function(dispatch) {
        api.apiGetTodos().then((response) => {
            console.log(response.data);
            dispatch(loadTodos(response.data));
        })
    }
}

const postToggleTodo = (uuid) => {
    console.log("postToggleTodo", uuid);

    return function(dispatch) {
        api.apiPostToggleTodo(uuid).then((response) => {

            console.log(response);
        dispatch(toggleTodo(uuid))})
    }
}

export default {addTodo, toggleTodo, createTodo, loadTodos, fetchTodos, postToggleTodo};
