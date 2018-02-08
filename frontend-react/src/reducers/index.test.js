import {todo, todos, toggle} from './index.js';
import {ADD_TODO, TOGGLE_TODO} from '../actions';

describe("todo", () => {
    it("can create", () => {
        const actual = todo("id", "TodoText", false);

        expect(actual.get('text')).toEqual("TodoText");
    });

    it("can toggle", () => {
        const actual = toggle(todo("id", "TodoText", false));

        expect(actual.get('completed')).toEqual(true);
    });
});

describe("todos", () => {

    it("can add todo", () => {
        const actual = todos(undefined, {type: ADD_TODO, id: 'id', text: 'TodoText'});

        expect(actual.size).toEqual(1);

        expect(actual.first().get('completed')).toEqual(false);
    });

     it("can toggle", () => {
        const actual = todos(undefined, {type: ADD_TODO, id: 'id', text: 'TodoText'});

        const toggled = todos(actual, {type: TOGGLE_TODO, id: 'id'});

        expect(toggled.first().get('completed')).toEqual(true);

    });

});