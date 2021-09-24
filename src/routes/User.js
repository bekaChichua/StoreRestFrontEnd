import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
  
        useEffect(() => {
          const result = axios(
            'http://localhost:8080/user',
          ).then(res => setUser(res.data))
        }, []);
  
    return (
        <div>
            <h1>User Page</h1>
            {user.map(singleUser => {
              console.log(user) 
                return (<li>{singleUser.username} </li>)
            })}
            <div>
              {user.map(singleUser => {
                console.log(singleUser.content)
                return(
                  singleUser.content.map(content => {
                    return( 
                      <div style={{border:"solid"}}>
                        <h1>Post</h1>
                        <p>content : {content.body}</p>
                        <hr/>
                        {content.comment.map(com => {
                          return(
                            <div>
                              <p>{com.text}</p>
                            </div>
                          )
                        })}
                      </div>
                    )
                  })    
                )
              })}
            </div>
        </div>
    )
}

export default User;