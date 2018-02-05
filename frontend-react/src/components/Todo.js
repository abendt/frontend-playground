import React, { Component } from "react";
import { Button, Input, List } from 'semantic-ui-react'

const Todo = ({text, completed}) => {

    const icon = completed  ? 'star' : 'empty star';

    return (
        <List.Item>
                    <List.Icon name={icon} size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header>{text}</List.Header>
                    </List.Content>
        </List.Item>
    );
}

export default Todo;