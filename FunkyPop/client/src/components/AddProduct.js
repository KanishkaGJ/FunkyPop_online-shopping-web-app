import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Input } from 'reactstrap';
import axios from "axios";
import '../css/customerLogin.css';

export default function AddProduct() {

    // const navigate = useNavigate();
    const navigate = useNavigate();

    const [file, setFile] = useState(null);
    const [productID, setPID] = useState("");
    const [productName, setPName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [type, setType] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [productDescription, setPDescrip] = useState("");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleFileChange = (event) => {
        setFile(event.target.value);
      };
    
      const handlePIDChange = (event) => {
        setPID(event.target.value);
      };
      const handlePNameChange = (event) => {
        setPName(event.target.value);
      };
      const handleQtyChange = (event) => {
        setQuantity(event.target.value);
      };
      const handleTypeChange = (event) => {
        setType(event.target.value);
      };
      const handleColorChange = (event) => {
        setColor(event.target.value);
      };
      const handleSizeChange = (event) => {
        setSize(event.target.value);
      };
      const handlePDesChange = (event) => {
        setPDescrip(event.target.value);
      };
      
     
      

    
      const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
    
        try {
          const formData = new FormData();
            formData.append("productID", productID);
            formData.append("productName", productName);
            formData.append("quantity", quantity);
            formData.append("type", type);
            formData.append("color", color);
            formData.append("size", size);
            formData.append("productDescription", productDescription);
            formData.append("image", file);
          
    
          const response = await axios.post("http://localhost:8060/product/addProduct", formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
    
          // Use navigate to redirect to the specified route
          navigate("/viewP");
    
          setImage(response.data);
        } catch (error) {
          setError(error.response.data.error);
          console.log(file);
        } finally {
          setLoading(false);
        }
      };

//   function sendData(e){

//     e.preventDefault();
//     const newProduct = {
//         productID,
//         productName,
//         quantity,
//         type,
//         color,
//         size,
//         productDescription,
//         image
//     }
//     console.log(newProduct);
//     //send http request
//     axios.post("http://localhost:8060/product/addProduct",newProduct).then(()=>{
//         alert("New Product added");
//         // history("/login");
//     }).catch((err)=>{
//         alert("Error occurred while adding product. Please try again.");
//         console.log(err)
//     })

//   }
  
  return (
    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <form onSubmit={handleSubmit} className="login100-form validate-form p-l-55 p-r-55 p-t-178">
            {image && (
              <img
                src={image.image}
                alt={image.title}
                style={{ width: "100%", height: "auto" }}
              />
            )}
                <span className="login100-form-title">
                    Add Product
                </span>

                <div className="wrap-input100 validate-input m-b-16" data-validate="Enter product ID">
                    <input className="input100" type="text" name="pid" placeholder="Product ID" onChange={handlePIDChange}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter product name">
                    <input className="input100" type="text" name="pname" placeholder="Product name" onChange={handlePNameChange}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter quantity">
                    <input className="input100" type="text" name="quantity" placeholder="Quantity" onChange={handleQtyChange}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter type">
                    <input className="input100" type="text" name="type" placeholder="Type" onChange={handleTypeChange}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter color">
                    <input className="input100" type="text" name="color" placeholder="Color" onChange={handleColorChange}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter size">
                    <input className="input100" type="text" name="size" placeholder="Size" onChange={handleSizeChange}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-35" data-validate = "Please enter product description">
                    <input className="input100" type="text" name="pdescrip" placeholder="Product description" onChange={handlePDesChange}/>
                    <span className="focus-input100"></span>
                </div>

                <div>
                  <Input type="file" onChange={handleFileChange}/>
                </div>
                
                    <button type="submit" className="login100-form-btn">
                        Add Product
                    </button>
                    <div className="flex-col-c p-t-35 p-b-40">
                    <span className="txt1 p-b-9">
                    <Link to="/signup" className="txt3">
                        I don't want to be in ths page
                    </Link>
                    </span>
                </div>

                
            </form>
        </div>
    </div>
</div>
  )
}



