import {todo, todos, toggle} from './index.js';
import {ADD_TODO, TOGGLE_TODO, LOAD_TODOS} from '../actions';

describe("todo", () => {
    it("can create", () => {
        const actual = todo("id", "TodoText");

        expect(actual.get('todo')).toEqual("TodoText");
    });

    it("is not completed by default", function () {
        const actual = todo("id", "TodoText");

        expect(actual.get('done')).toEqual(false);
    });

    it("can toggle", () => {
        const actual = toggle(todo("id", "TodoText", false));

        expect(actual.get('done')).toEqual(true);
    });
});

describe("todos", () => {

    it("can add todo", () => {
        const actual = todos(undefined, {type: ADD_TODO, id: 'id', text: 'TodoText'});

        expect(actual.size).toEqual(1);
    });

     it("can toggle", () => {
        const actual = todos(undefined, {type: ADD_TODO, id: 'id', text: 'TodoText'});

        const toggled = todos(actual, {type: TOGGLE_TODO, id: 'id'});

        expect(toggled.first().get('done')).toEqual(true);
    });

     it("can load todo", () => {
            const actual = todos(undefined, {type: LOAD_TODOS, todos: [{id: "id", text: "Todo", completed: false}]});

            expect(actual.size).toEqual(1);
        });

});