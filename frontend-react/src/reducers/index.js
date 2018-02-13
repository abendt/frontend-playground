import {ADD_TODO, TOGGLE_TODO, LOAD_TODOS} from '../actions';
import Immutable from 'immutable';



import {
  combineReducers
} from 'redux-immutable';


export const todo = (uuid, todo) => Immutable.Map({uuid, todo, done: false});

export const toggle = (todo) => todo.set('done', !todo.get('done'));

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
            return state.map(todo =>
                (todo.get('uuid') === action.id)
                    ? toggle(todo)
                    : todo);

        case LOAD_TODOS:
            return Immutable.fromJS(action.todos);

        default:
            return state
    }
};

const rootReducer = combineReducers({todos});

export default rootReducer;

