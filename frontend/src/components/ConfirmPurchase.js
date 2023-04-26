import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import qs from "qs";

export default function ConfirmPurchase() {
  const location = useLocation();
  const { newData } = qs.parse(location.search, { ignoreQueryPrefix: true });

  return (
    <div>
      <h2>Delivery Details:</h2>
      <p>Customer Name: {newData.customerName}</p>
      <p>Customer Phone: {newData.customerPhone}</p>
      <p>Delivery Address: {newData.deliveryAddress}</p>
      <p>Total Amount: {newData.tot}</p>
    </div>
  );
}
