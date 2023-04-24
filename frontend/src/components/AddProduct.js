import React, { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from "axios";
import '../css/customerLogin.css';


export default function AddProduct() {

//   const history = useNavigate();

  // productID
// productName
// quantity
// type
// color
// size
// productDescription

  const [productID, setPID] = useState("");
  const [productName, setPName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [productDescription, setPDescrip] = useState("");

  function sendData(e){

    e.preventDefault();
    const newProduct = {
        productID,
        productName,
        quantity,
        type,
        color,
        size,
        productDescription
    }
    console.log(newProduct);
    //send http request
    axios.post("http://localhost:8080/product/addProduct",newProduct).then(()=>{
        alert("New Product added");
        // history("/login");
    }).catch((err)=>{
        alert(err)
    })

  }


    const handleChange = (e) => { // e = event
        e.preventDefault();

        const formData = new FormData()
        formData.append("photo", e.target.files[0])

        axios.post("http://localhost:8080/api/save", formData)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => console.log(err));
    }

//   return <label className="button" htmlFor="file_picker">
//     <AiFillFileAdd/>
//     <input 
//         hidden 
//         type="file" 
//         name="file_picker" 
//         id="file_picker" 
//         onChange={(e) => handleChange(e)}
//     />
//   </label>;

  
  return (
    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <form onSubmit={sendData} className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                <span className="login100-form-title">
                    Add Product
                </span>

                <div className="wrap-input100 validate-input m-b-16" data-validate="Enter product ID">
                    <input className="input100" type="text" name="username" placeholder="Product ID" 
        onChange={(e)=>{
            setPID(e.target.value);
        }}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter password">
                    <input className="input100" type="text" name="pass" placeholder="Product name"
        onChange={(e)=>{
            setPName(e.target.value);
        }}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter password">
                    <input className="input100" type="text" name="pass" placeholder="Quantity"
        onChange={(e)=>{

            setQuantity(e.target.value);
        }}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter password">
                    <input className="input100" type="text" name="pass" placeholder="Type"
        onChange={(e)=>{
            setType(e.target.value);
        }}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter password">
                    <input className="input100" type="text" name="pass" placeholder="Color"
        onChange={(e)=>{
            setColor(e.target.value);
        }}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter password">
                    <input className="input100" type="text" name="pass" placeholder="Size"
        onChange={(e)=>{
            setSize(e.target.value);
        }}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-35" data-validate = "Please enter password">
                    <input className="input100" type="text" name="pass" placeholder="Product description"
        onChange={(e)=>{
            setPDescrip(e.target.value);
        }}/>
                    <span className="focus-input100"></span>
                </div>

                
                    <button type="file" htmlFor="file_picker" className="login100-form-btn" name="file_picker" id="file_picker" onChange={(e) => handleChange(e)}>
                        Add Product
                    </button>
                    <button type="submit" className="login100-form-btn">
                        Add Product
                    </button>
                <div>
                    <Link to="" className='productLink' >
                        I don't want to be in this page
                    </Link>
                </div>

                
            </form>
        </div>
    </div>
</div>
  )
}



// {
//     "ProductID": "123123",
//     "ProductName": "123123",
//     "quantity": "123123",
//     "type": "123123",
//     "color": "123123",
//     "size": "123123",
//     "productDescription": "123123"

// }