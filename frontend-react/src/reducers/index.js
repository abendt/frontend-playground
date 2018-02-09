import {ADD_TODO, TOGGLE_TODO} from '../actions';
import Immutable from 'immutable';

export const todo = (id, text) => Immutable.Map({id, text, completed: false});

export const toggle = (todo) => todo.set('completed', !todo.get('completed'));

// https://redux.js.org/docs/basics/Reducers.html

// https://facebook.github.io/immutable-js/

export const todos = (state = Immutable.List(), action) => {

    console.log("reducer state", state);
    console.log("reducer action", action);

    switch (action.type) {
        case ADD_TODO: {
            return state.push(todo(action.id, action.text));
        }
        case TOGGLE_TODO:
            console.log('TOGGLE_TODO');

            return state.map(todo =>
                (todo.get('id') === "id")
                    ? toggle(todo)
                    : todo);

        default:
            return state
    }
};