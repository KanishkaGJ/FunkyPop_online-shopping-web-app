import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

export default function SellerSignup() {

  const history = useNavigate();

  const [SellerName, setSellerName] = useState("");
  const [SellerEmail, setSellerEmail] = useState("");
  const [SellerUsername, setSellerUsername] = useState("");
  const [SellerPassword, setSellerPassword] = useState("");


  function sendData(e){

    e.preventDefault();
    const newSeller = {
        SellerName,
        SellerEmail,
        SellerUsername,
        SellerPassword,
    }

    //send http request
    axios.post("http://localhost:8070/seller/signup",newSeller).then(()=>{
        alert("Customer added");
        history("/login");
    }).catch((err)=>{
        alert(err)
    })

  }
  
  return (
    <div>
        <form onSubmit={sendData}>
            Name: <input type="text" onChange={(e)=>{
                setSellerName(e.target.value);
            }}/><br/>
            Email : <input type="email" onChange={(e)=>{
                setSellerEmail(e.target.value);
            }}/><br/>
            Username : <input type="text" onChange={(e)=>{
                setSellerUsername(e.target.value);
            }}/><br/>
            Password : <input type="password" onChange={(e)=>{
                setSellerPassword(e.target.value);
            }}/><br/>
            
            <button type="submit">Signup</button>
        </form>
    </div>
  )
}
