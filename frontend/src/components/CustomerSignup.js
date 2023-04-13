import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

export default function CustomerSignup() {

  const history = useNavigate();

  const [CustomerName, setCusName] = useState("");
  const [CustomerEmail, setCusEmail] = useState("");
  const [ContactNum, setCusNum] = useState("");
  const [Address, setCusAddress] = useState("");
  const [CusUsername, setCusUsername] = useState("");
  const [CusPassword, setCusPassword] = useState("");

  function sendData(e){

    e.preventDefault();
    const newCustomer = {
        CustomerName,
        CustomerEmail,
        ContactNum,
        Address,
        CusUsername,
        CusPassword
    }

    //send http request
    axios.post("http://localhost:8070/customer/signup",newCustomer).then(()=>{
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
                setCusName(e.target.value);
            }}/><br/>
            Email : <input type="email" onChange={(e)=>{
                setCusEmail(e.target.value);
            }}/><br/>
            Tel-no : <input type="tel" onChange={(e)=>{
                setCusNum(e.target.value);
            }}/><br/>
            Address : <input type="text" onChange={(e)=>{
                setCusAddress(e.target.value);
            }}/><br/>
            Username : <input type="text" onChange={(e)=>{
                setCusUsername(e.target.value);
            }}/><br/>
            Password : <input type="password" onChange={(e)=>{
                setCusPassword(e.target.value);
            }}/><br/>
            
            <button type="submit">Signup</button>
        </form>
    </div>
  )
}
