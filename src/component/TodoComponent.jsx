import { useEffect, useState } from "react"
import { retriveTodoApi, updateTodoApi,addTodoApi } from "./api/TodoApiService"
import { useNavigate, useParams } from "react-router-dom"
import { Formik,Field,Form, ErrorMessage  } from "formik"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useAuth } from "./AuthContext";

export default function TodoComponent(){
            const authcontext=useAuth()
            const username=authcontext.username
            const [title,setTitle]=useState('')
            const [status,setstatus]=useState('')
            const [date,setdate]=useState('')

const {id} = useParams();
    useEffect(
    function retrive(){
        if(id>=0){
        retriveTodoApi(username,id)
        .then((Response)=>{
            setTitle(Response.data.title)
            setdate(Response.data.date)
            setstatus(Response.data.status)

        })
    }

    })
    const naigate=useNavigate()
    function onSubmit(values){
       
        
        const todo={
            id,
            username:username,
            title:values.title
            ,date:values.date
            ,status:values.status
        }
        if(id>=0){
        updateTodoApi(username,todo)
        .then(naigate('/todos'))
        }else if(id<0){
            addTodoApi(username,todo)
            .then(naigate('/todos'))
        }
        
    }
    function validate(value){
       let error={ }
       if(value.title.length<5){
        error.title='Title is short'
       }
       return error
    }
    return(
        <div className="container">
            <h1>Edit Todo</h1><br/>
            <div>
                <Formik initialValues={{id,title,date,status}}
                enableReinitialize={true}
                onSubmit={onSubmit}
                validate={validate} 
                validateOnChange={false}
                validateOnBlur={false }>{
                    (props) => (
                        <Form>
                            <ErrorMessage
                            name="title"
                            component="div"
                            className="alert alert-warning"/>
                             <fieldset className="form-group">
                                <Field name="id"type="hidden"/>

                            </fieldset>
                            <fieldset className="form-group">
                                <label>Title</label>
                                <Field name="title" type="text" className="form-control"/>

                            </fieldset>
                           
                            <fieldset className="form-group">
                                <label>date</label>
                                <Field name="date" type="date" className="form-control"/>

                            </fieldset>
                            <fieldset className="form-group">
                                <label>status</label>
                                <Field name="status" type="text" className="form-control"/>

                            </fieldset>
                            <div>
                                <button className="btn btn-success m5" type="submit">Submit</button>
                            </div>
                        </Form>
                    )
}
                </Formik>
            </div>
        </div>
    )
}