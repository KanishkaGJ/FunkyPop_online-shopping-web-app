import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
// import '../App.css';



export default function ClientProduct() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8070/product/products')
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
  // {`/products/${data._id}`}
 return (
  <>
    {product.map((data) => {
        return (
          <div className="ui">
            <div className="cards" key={data._id}>
            <Link to="/singleP" onClick={() => setID(data._id, data.productID, data.productName, data.quantity, data.type, data.color, data.size, data.productDescription)}>
              <div className="ui link cards">
                  <div className="card">
                  <div className="image">
                    <img src='../images/cropTop' alt={data.productName} />
                  </div>
                  <div className="price">
                    <div className="price">{data.productName}</div>
                    <div className="price"> {data.size}</div>
                    <div className="price">{data.color}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          </div>
          
        )
      })
  
    }
  </>
 )
  
}



// import React, { useEffect, useCallback, useMemo } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { setProducts } from "../redux/actions/productsActions";
// import SingleProduct from "./SingleProduct"
// const ProductPage = () => {
//   const products = useSelector((state) => state.allProducts.products);
//   const dispatch = useDispatch();
//   const fetchProducts = async () => {
//     const response = await axios
//       .get("http://localhost:8080/products/")
//       .catch((err) => {
//         console.log("Err: ", err);
//       });
//     dispatch(setProducts(response.data));
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   console.log("Products :", products);
//   return (
//     <div className="ui grid container">
//       <SingleProduct />
//     </div>
//   );
// };

// export default ProductPage;