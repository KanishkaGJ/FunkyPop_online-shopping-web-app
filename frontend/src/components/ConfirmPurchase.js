import React from "react";
import { useLocation } from "react-router-dom";

export default function ConfirmPurchase() {
  const location = useLocation();
  const { customerName, customerPhone, deliveryAddress, tot } = location.state;

  return (
    <div>
      <h2>Delivery Details:</h2>
      <p>Customer Name: {customerName}</p>
      <p>Customer Phone: {customerPhone}</p>
      <p>Delivery Address: {deliveryAddress}</p>
      <p>Total Amount: {tot}</p>
    </div>
  );
}
