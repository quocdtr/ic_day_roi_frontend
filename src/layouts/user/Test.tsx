import { link } from "fs";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import { setSyntheticLeadingComments } from "typescript";
const Test = () =>{
    const [username, setUsername] = useState<string | null> (null);
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            const userData = jwtDecode(token);
            console.log(userData);
            if(userData){
                setUsername(userData.sub+'');
            }
        }
},[]
);
    return (
        <div>
        {
           <NavLink className="nav-link active" aria-current="page" to="/"></NavLink>
        }
        </div>
    );
}
export default Test;