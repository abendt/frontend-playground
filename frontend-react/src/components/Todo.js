import React from "react";
import {List} from 'semantic-ui-react'

const Todo = ({text, completed, onClick}) => {

    // functional component: https://reactjs.org/docs/components-and-props.html

    const icon = completed  ? 'star' : 'empty star';

    return (
        <List.Item onClick={onClick}>
                    <List.Icon name={icon} size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header>{text}</List.Header>
                    </List.Content>
        </List.Item>
    );
};

export default Todo;