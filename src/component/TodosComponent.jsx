import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useEffect, useState } from "react";
import { deleteTodoApi, loadTodo } from "./api/TodoApiService";
import axios from "axios";
import { Button } from "bootstrap";
import { useAuth } from "./AuthContext";
export default function TodosComponent(){
    const today=new Date()
    const trargetdate=new Date(today.getFullYear()+12,today.getMonth(),today.getDay())
    const [todos,setTodos]=useState([])
    useEffect(
        ()=> refresh(),[]
    )
    const authContext=useAuth();
     function refresh(){
        loadTodo(authContext.username)
        .then(reponse=>{
        setTodos(reponse.data)
    }).catch(error=>console.error(error))
     }
     const navigate=useNavigate();

     const [massage,setMassage]=useState()
     function deleteTodo(id){
        deleteTodoApi(authContext.username,id)
        .then(
            setMassage("deleted")
            )
     }
     function updateTodo (id){
        navigate(`/todo/${id}`)


     }
 
     function addNew(){
        navigate("/todo/-1")
     }
    return(
    <div className="container">
        <h1> Todo Page</h1>
        {massage &&<div className="alert alert-warning">{massage}</div>}
        <div>
      <table className="table">
        <thead >
            <tr>
            <th>Id</th>

            <th>title</th>
            <th>Date</th>

            <th>Status</th>
            <th>Delete</th>
            <th>Update</th>

            </tr>
        </thead>
        <tbody>
            {
                todos.map(
                    todo=>(
            <tr>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.date.toString()}</td>
                <td>{todo.status.toString()}</td>
                <td><button onClick={()=>deleteTodo(todo.id)} className="btn btn-warning">Delete</button></td>
                <td><button onClick={()=>updateTodo(todo.id)} className="btn btn-warning">update</button></td>

                </tr>
                )
    )
}
        </tbody>
      </table>
      <div><button onClick={addNew} className="btn btn-success m-3">Add new</button></div>
      </div>
    </div>
    );
}