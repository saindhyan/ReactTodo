import { useState } from "react";
import "../css/loginstyle.css"
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";




export default function LoginComponent(){

    const authContext=useAuth()
    const [Email,setEmail]=useState();
    function handelEmailChange(event){
    setEmail(event.target.value)
    }

    const [Password,setPassword]=useState();
    function handelPasswordChange(event){
        setPassword(event.target.value)
    }

    const [errorMsg,setErroerMsg]=useState(false);
    const navigate=useNavigate();
    
    function SubmitLogin(){
        if(authContext.Login(Email,Password)){
            setErroerMsg(false)
            navigate("/home")

        }else{
            setErroerMsg(true)
            alert("login failed");

        }
    
    }
    return(
        <div className="LoginComponent">
           { errorMsg && <div>Check Credintials</div>}
            <div className="LoginForm">
                <div>
            <label >Email</label>
        <input type="email" name="email" value={Email} onChange={handelEmailChange}/>
         </div>
        <div>
        <label >Password</label>

        <input type="password" value={Password} name="password" onChange={handelPasswordChange}/>
        </div>
        <div>
            <button onClick={SubmitLogin}>Login</button>
        </div>
        </div>
        </div>
    );

}