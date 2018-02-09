import React from "react";
import {List} from 'semantic-ui-react'
import Todo from './Todo'
import AddTodo from './AddTodo'

import {addTodo, toggleTodo} from '../actions';
import {connect} from 'react-redux'

const TodoList = ({todos, onAddTodo}) => {

    return (
        <div>
            <AddTodo onAddTodo={onAddTodo}/>

            <div>
                <List selection verticalAlign='middle'>
                    {
                        todos.map((todo) => <Todo key={todo.get('id')}
                                                  text={todo.get('text')}
                                                  completed={todo.get('completed')}/>)
                    }
                </List>
            </div>
        </div>
    );
};

export {TodoList};

// https://redux.js.org/docs/basics/UsageWithReact.html

const mapStateToProps = state => ({
    todos: state.get('todos')
});

const mapDispatchToProps = dispatch => ({
    onToggleTodo: id => {
        dispatch(toggleTodo(id))
    },

    onAddTodo: text => {
        dispatch(addTodo(text))
    }
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList
