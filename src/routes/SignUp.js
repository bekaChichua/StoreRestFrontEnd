import {React, useState} from 'react';
import axios from 'axios';


const SignUp = () => {

    const[login, setLogin] = useState({
        username:'',
        password:''
    });

    

    const onChange =(event)=> {

        setLogin({...login, [event.target.name]: event.target.value})
         console.log(login)
    }

    const onSignupSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8080/user", login)
        .then(res => {
            console.log(res)
        })
        .catch(err=>console.log(err))
        setLogin({username:"", password:""})
    }

    return (
        <div>
            <form onSubmit={onSignupSubmit}>
                <h1>Please Sign up</h1>
                <label>username: </label> 
                <input type="text" name="username" value={login.username} onChange={onChange} placeholder="enter username"/>
                <label>password: </label>
                <input type="password" name="password" value={login.password} onChange={onChange} placeholder="enter password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUp
