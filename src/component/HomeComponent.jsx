import { Link } from "react-router-dom";

export default function HomeComponent(){
return(
    <div>
        <h1>Home Page</h1>
        <h6>Lets Explore 
        <Link to="/todos"> todos</Link>
        </h6>
    </div>
    );
}