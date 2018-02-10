import React from "react";
import {List} from 'semantic-ui-react'
import Todo from './Todo'
import AddTodo from './AddTodo'

const TodoList = ({todos, onAddTodo, onToggleTodo}) => {

    console.log("TodoList", todos);

    return (
        <div>
            <AddTodo onAddTodo={onAddTodo}/>

            <div>
                <List selection verticalAlign='middle'>
                    {
                        todos.map((todo) => <Todo key={todo.uuid}
                                                  text={todo.todo}
                                                  completed={todo.done}
                                                  onClick={() => onToggleTodo(todo.uuid)}
                                                  />)
                    }
                </List>
            </div>
        </div>
    );
};

export default TodoList;

