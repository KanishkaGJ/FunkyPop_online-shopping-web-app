import React, { useEffect, useState } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;
let firstRender = true;

export default function Testpage() {
    
    const [user, setUser] =  useState();

    const refreshToken = async()=>{
        const res = await axios.get("http://localhost:8080/customer/refresh",{
            withCredentials: true,
        }).catch((err)=>console.log(err));

        const data = await res.data;
        return data;
    }


    const sendRequest = async ()=>{
        const res = await axios.get("http://localhost:8080/customer/cus", {
            withCredentials: true
        }).catch((err)=>console.log(err));
        const data = await res.data;
        return data;
    };

    useEffect(()=>{
        if(firstRender){
            firstRender = false;
            sendRequest().then((data)=>setUser(data.user));
        }
        let interval = setInterval(()=>{
            refreshToken().then(data=>setUser(data.user))
        },1000*28);

        return ()=>clearInterval(interval)
        
    },[]);

    return (

    <div>
        Test Page<br/>
        {user && <h1>{user.CustomerName}</h1>}
    </div>
    )
}
