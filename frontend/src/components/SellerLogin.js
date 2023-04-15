import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

export default function SellerLogin() {

  const history = useNavigate();
  
  const [SellerUsername, setSellerUsername] = useState("");
  const [SellerPassword, setSellerPassword] = useState("");

  function sendData(e){

    e.preventDefault();
    const newLogin= {
        SellerUsername,
        SellerPassword
    }

    //send http request
    axios.post("http://localhost:8070/seller/login",newLogin).then(()=>{
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
            setSellerUsername(e.target.value);
        }}/><br/>
        Password : <input type="password" onChange={(e)=>{
            setSellerPassword(e.target.value);
        }}/><br/>
        
        <button type="submit">Login</button>
    </form>
</div>
  )
}
