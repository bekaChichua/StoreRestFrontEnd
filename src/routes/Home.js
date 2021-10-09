import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Cookie from 'js-cookie';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Content from '../components/Content';

const Home = () => {
    const api = 'http://localhost:8080/user/post';
    const [content, setContent] = useState([]);

    useEffect(()=>{
        axios.get(api, {headers : {
            Authorization : "Bearer " + Cookie.get("access_token")
          }})
          .then(res => {
              setContent(res.data);
              console.log(res.data)
            })

    },[])


    return (
        <div>
            <h1>all posts</h1>
            <Router>
            {content.map(con =>{
                return(
                    <div>
                    <Link to={`/${con.id}`} key={con.id}>{con.body}</Link>
                    <Switch>
                        <Route path={`/${con.id}`}>
                            <Content con = {con}/>
                        </Route>
                </Switch>
                    </div>
                )
            })}
            </Router>
        </div>
    )
}

export default Home
