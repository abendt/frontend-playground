import React from "react";
import {List} from 'semantic-ui-react'
import Todo from './Todo'
import AddTodo from './AddTodo'

const TodoList = ({todos, onAddTodo, onToggleTodo}) => {
    return (
        <div>
            <AddTodo onAddTodo={onAddTodo}/>

            <div>
                <List selection animated verticalAlign='middle'>
                    {
                        todos.map((todo) => <Todo key={todo.uuid}
                                                  text={todo.todo}
                                                  completed={todo.done}
                                                  onClick={() => !todo.done && onToggleTodo(todo.uuid)}
                                                  />)
                    }
                </List>
            </div>
        </div>
    );
};

export default TodoList;

