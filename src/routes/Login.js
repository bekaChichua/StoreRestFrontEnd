import {React, useState} from 'react';
import axios from "axios";
import Cookie from "js-cookie";
import JWThelper from "../util/JWThelper";

const Login = () => {

    const [login, setLogin] = useState({
        username:'',
        password:''
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const jwt = new JWThelper();

    const onChange =(event)=> {

        setLogin({...login, [event.target.name]: event.target.value})
         console.log(login)
    }

    const onLoginSubmit = e => {
        e.preventDefault();
        jwt.login(login,)
        .then( setIsLoggedIn(true) )
        .catch(err=>console.log(err))
        setLogin({username:"", password:""})
    }

    const onLogoutSubmit = e => {
        e.preventDefault();
        setIsLoggedIn(false);
        
    }

    return (
        <div>
            <p>login</p>
            {Cookie.get("access_token")}
            {
            !isLoggedIn ? 
            (
                <form onSubmit={onLoginSubmit}>
                    <h1>Please Login</h1>
                    <label>username: </label> 
                    <input type="text" name="username" value={login.username} onChange={onChange} placeholder="enter username"/>
                    <label>password: </label>
                    <input type="password" name="password" value={login.password} onChange={onChange} placeholder="enter password"/>
                    <button type="submit">Submit</button>
                </form>
            ) 
            : 
            (
                <div>
                    <h1>Log out before you log in with new account!</h1>
                    <button type="submit" onSubmit={onLogoutSubmit}>Logout</button>
                </div>
            )
            }
            
        </div>
    )
}

export default Login
