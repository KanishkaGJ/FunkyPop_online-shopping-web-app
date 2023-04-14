import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

export default function CustomerLogin() {

  const history = useNavigate();
  
  const [CusUsername, setCusUsername] = useState("");
  const [CusPassword, setCusPassword] = useState("");

  function sendData(e){

    e.preventDefault();
    const newLogin= {
      CusUsername,
        CusPassword
    }

    //send http request
    axios.post("http://localhost:8070/customer/login",newLogin).then(()=>{
        alert("Login Successful");
        history("/users");
    }).catch((err)=>{
        alert(err)
    })

  }
  
  return (
    <div>
    <form onSubmit={sendData}>
        Username : <input type="text" onChange={(e)=>{
            setCusUsername(e.target.value);
        }}/><br/>
        Password : <input type="password" onChange={(e)=>{
            setCusPassword(e.target.value);
        }}/><br/>
        
        <button type="submit">Login</button>
    </form>
</div>
  )
}
