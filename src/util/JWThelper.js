import axios from "axios";
import Cookie from "js-cookie";

export default class JWThelper {
    login(login, func){
       return axios.post('http://localhost:8080/login', {}, { params: login})
            .then(resp => {
                console.log(resp + " this is responseeeeeee")
                    Cookie.set("access_token", resp.data["access_token"]);
                    Cookie.set("refresh_token", resp.data["refresh_token"]);
                })
    }

    refreshToken(refreshCookie){
        axios.post('http://localhost:8080/refreshToken', {headers : {
              Authorization : "Bearer " + refreshCookie}}
          ).then(resp => {
            Cookie.set("access_token", resp.data["access_token"]);
            Cookie.set("refresh_token", resp.data["refresh_token"]);
        })
    }

    getUsers(accessCookie){
        axios.get('http://localhost:8080/user', {headers : {Authorization : "Bearer " + accessCookie}})
    }
}