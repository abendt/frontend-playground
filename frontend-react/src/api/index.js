import Axios from 'axios';

const axios = Axios.create({
});

const apiGetTodos = () => {

    console.log("get /todos");
    return axios.get('/todos');
}

const apiPostTodo = (todo) => {
    return axios.post("/todos", {todo})
}

const apiPostToggleTodo = (uuid) => {
    return axios.post("/todos/" + uuid)
}

export {apiGetTodos, apiPostTodo, apiPostToggleTodo}