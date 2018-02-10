import React from "react";
import {List} from 'semantic-ui-react'
import Todo from './Todo'
import AddTodo from './AddTodo'

const TodoList = ({todos, onAddTodo}) => {
    return (
        <div>
            <AddTodo onAddTodo={onAddTodo}/>

            <div>
                <List selection verticalAlign='middle'>
                    {
                        todos.map((todo) => <Todo key={todo.id}
                                                  text={todo.text}
                                                  completed={todo.completed}/>)
                    }
                </List>
            </div>
        </div>
    );
};

export default TodoList;

