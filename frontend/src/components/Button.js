import React from "react";
import {AiFillFileAdd} from "react-icons/ai";
import axios from "axios";


const Button = () => {

    const handleChange = (e) => { // e = event
        e.preventDefault();

        const formData = new FormData()
        formData.append("photo", e.target.files[0])

        axios.post("http://localhost:8070/api/save", formData)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => console.log(err));
    }

  return <label className="button" htmlFor="file_picker">
    <AiFillFileAdd/>
    <input 
        hidden 
        type="file" 
        name="file_picker" 
        id="file_picker" 
        onChange={(e) => handleChange(e)}
    />
  </label>;
};

export default Button;
