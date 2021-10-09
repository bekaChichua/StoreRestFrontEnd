import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Cookie from 'js-cookie';

import SockJS from "sockjs-client";
import Stomp from 'stompjs';

const Content = ({con}) => {

    const api = 'http://localhost:8080/user/post/' + con.id;
    let socket = new SockJS("http://localhost:8080/our-ws");
    let stompClient = Stomp.over(socket);
    
    const [allComments, setAllComments] = useState([]);
    const [sendMessage, SetSendMessage] = useState("");

    useEffect(()=>{
        axios.get(api, {headers : {Authorization : "Bearer " + Cookie.get("access_token")}})
            .then(response => {
                let comments = response.data.reverse();
                setAllComments(comments)
            })

        stompClient.connect({headers : {Authorization : "Bearer " + Cookie.get("access_token")}}, frame => {
            console.log('Connected' + frame)
            stompClient.subscribe(`/topic/${con.id}`, ResponseMessage => {
                    let json = JSON.parse(ResponseMessage.body);
                    console.log("88888" +  ResponseMessage)
                    setAllComments(oldArr => [json, ...oldArr]);
                    console.log("new text inside connect " + allComments);
                    console.log("JSON.parse(ResponseMessage.body).Content " + JSON.parse(ResponseMessage.body).body)
                console.log("hihoooooooooooooooo");
            }, {headers : {Authorization : "Bearer " + Cookie.get("access_token")}})
        })
    },[])

    const onChange =(e)=>{
        SetSendMessage(e.target.value)
        console.log(sendMessage)
    }

    const onSubmit =(e)=> {
        e.preventDefault();
        console.log(sendMessage)
        try{
            stompClient.send(`/ws/comments/${con.id}`, {}, JSON.stringify({'text': sendMessage}))
            console.log(`/ws/comments/${con.id}` + " api endpoint")
        }catch(err){
            console.log(err)
        }
        console.log("new text inside submit " + allComments);
    }

    return (
        <div style={{border:"solid"}}>
            <h3>content</h3>
            <textarea name="textbox" value={sendMessage} onChange={onChange}/>
            <button type="submit" onClick={onSubmit}>Submit</button>
            {allComments.map(comment=>{
                console.log(comment.text + " asjhdjsdhflasdhflaksdhfldsahfldashlfkdsahkfjh")
                return(
                    <p>{comment.text}</p>
                )
            })}
        </div>
    )
}
export default Content;