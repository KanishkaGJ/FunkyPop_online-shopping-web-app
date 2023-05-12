import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";




export default function ClientProduct() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8060/product/products')
      .then((getPro) => {
        setProduct(getPro.data);
      });
  }, []);

  const setID = (_id, productID, productName, quantity, type, color, size, productDescription, image) => {

		localStorage.setItem('productID', productID);
		localStorage.setItem('productName', productName);
		localStorage.setItem('quantity', quantity);
    localStorage.setItem('type', type);
    localStorage.setItem('color', color);
    localStorage.setItem('size', size);
    localStorage.setItem('productDescription', productDescription);
		localStorage.setItem('ID', _id);
    localStorage.setItem('image', image);
	};

 return (
  <>
    <div className="image-grid">
      {product.map((products) => (
        <div key={products._id} className="image-card">
          <div
            onClick={() =>
              setID(
                products._id,
                products.productName,
                products.size,
                products.image
              )
            }
          >
            <Link to={`/animalArticle`} style={{ textDecoration: "none" }}>
              <img src={product.image} alt={product.productName} />
              <h2>{product.productName}</h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </>
 )
  
}



