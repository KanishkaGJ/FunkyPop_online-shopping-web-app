import React, { useEffect, useState } from "react";
import "../css/cartPage.css";
import { useNavigate, useParams } from "react-router";
import Axios from "axios";
import { Link } from "react-router-dom";


const CartPage = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    Axios.get('localhost:9010/cart/allCarts').then((getCart) => {
      setCart(getCart.data);
    })
  })

  const setC = (_id, cartID, pName, pQuantity) => {
    localStorage.setItem('cartID', cartID);
    localStorage.setItem('pName', pName);
    localStorage.setItem('pQuantity', pQuantity);
  }

  return (
    <div className="cartPage__right">
        <h1>Cart Items.</h1>
        <br />

        <div>
          <table className="table text-black">
						<thead className="thead-primary">
								<tr>
									<th>Cart ID</th>
									<th>Product Name</th>
									<th>Quantity</th>
								</tr>
						</thead>
						{cart.map((data) => {
						<tbody>
              <tr>
							  <td>001</td>
								<td>T-Shirt</td>
								<td>3</td>
							</tr>
							<tr>
							  <td>{data.cartID}</td>
								<td>{data.productName}</td>
								<td>{data.quantity}</td>
							</tr>
						</tbody>
						})}
					</table>
          <Link to="/pay">
            <button className="btn btn-sm btn-primary viewBtn">Proceed to checkout</button>
          </Link>
        </div>         
    </div>
  )
}

export default CartPage

