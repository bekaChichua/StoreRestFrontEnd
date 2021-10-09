import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

const User = () => {
    const apiUrl = "http://localhost:8080/user";

    let contentSchema = {
      id : "",
      date : "",
      body : "",
      postedBy : "",
    }

    let commentSchema = {
      id : "",
      date : "",
      text : "",
      postedBy : ""
    }

    const [user, setUser] = useState([]);
    const [content, setContent] = useState([])
    const [comment, setComment] = useState([])
  
    const auth = {
          username: "beka",
          password: "beka"
        }
        let refresh = ""
        useEffect(() => {
          const result = axios(
            'http://localhost:8080/user', {headers : {
              Authorization : "Bearer " + Cookie.get("access_token")
            }}
          ).then(res => setUser(res.data))
          .catch(
            error => {console.log(error.response)}
            )
        }, []);
  
    return (
        <div>
            <h1>User Page</h1>
            {comment}
            {user.map(singleUser => {
              console.log(user) 
                return (<li>{singleUser.username} </li>)
            })}
        </div>
    )
}

export default User;