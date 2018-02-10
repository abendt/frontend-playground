import TodoList from '../components/TodoList'
import {addTodo, toggleTodo, createTodo, postToggleTodo} from '../actions';
import {connect} from 'react-redux'

import toJs from './containers'

// https://redux.js.org/docs/basics/UsageWithReact.html

const mapStateToProps = state => ({
    todos: state.get('todos')
});

const mapDispatchToProps = dispatch => ({
    onToggleTodo: id => dispatch(postToggleTodo(id)),

    onAddTodo: text => dispatch(createTodo(text))
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(toJs(TodoList));

export default VisibleTodoList
