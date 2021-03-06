import TodoList from '../components/TodoList'
import actions from '../actions';
import {connect} from 'react-redux'

import toJs from './containers'

// https://redux.js.org/docs/basics/UsageWithReact.html

const mapStateToProps = state => ({
    todos: state.get('todos')
});

const mapDispatchToProps = dispatch => ({
    onToggleTodo: id => dispatch(actions.postToggleTodo(id)),

    onAddTodo: text => dispatch(actions.createTodo(text))
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(toJs(TodoList));

export default VisibleTodoList
