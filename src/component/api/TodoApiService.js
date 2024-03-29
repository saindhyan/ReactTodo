import axios from "axios";

const apiClient=axios.create(
    {
        baseURL:'http://localhost:8080/todos'
    }
)
export const loadTodo
=(username)=> apiClient.get(`${username}/list`)
export const deleteTodoApi
=(username,id)=> apiClient.delete(`${username}/todo-delete/${id}`)
export const retriveTodoApi
=(username,id)=> apiClient.get(`${username}/list/${id}`)
export const updateTodoApi
=(username,todo)=> apiClient.put(`${username}/todo-update`,todo)
export const addTodoApi
=(username,todo)=> apiClient.post(`${username}/add-todo`,todo)
