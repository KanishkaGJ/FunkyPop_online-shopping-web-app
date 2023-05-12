import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../css/clientP.css"




export default function ClientProduct() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8060/product/products')
      .then((getPro) => {
        setProduct(getPro.data);
      });
  }, []);

  const setID = (_id, productID, productName, quantity, type, color, size, productDescription) => {

		localStorage.setItem('productID', productID);
		localStorage.setItem('productName', productName);
		localStorage.setItem('quantity', quantity);
    localStorage.setItem('type', type);
    localStorage.setItem('color', color);
    localStorage.setItem('size', size);
    localStorage.setItem('productDescription', productDescription);
		localStorage.setItem('ID', _id);
	};

 
        return (
          <div className="image-grid">
      {product.map((product) => (
        <div key={product._id} className="image-card">
          <div
            onClick={() =>
              setID(
                product._id,
                product.productName,
                product.quantity,
                product.type,
                product.color,
                product.size,
                product.productDescription,
              )
            }
          >
            <Link to={`/singleP`} style={{ textDecoration: "none" }}>
              <img src={product.image} alt={product.productName} />
              <h2>{product.productName}</h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
          
        )
   
 
  
}



