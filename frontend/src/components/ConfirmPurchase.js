import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import qs from "qs";

export default function ConfirmPurchase() {
  const location = useLocation();
  const { formData } = qs.parse(location.search, { ignoreQueryPrefix: true });

  return (
    <div>
      <h2>Delivery Details:</h2>
      <p>Customer Name: {formData.customerName}</p>
      <p>Customer Phone: {formData.customerPhone}</p>
      <p>Delivery Address: {formData.deliveryAddress}</p>
      <p>Total Amount: {formData.tot}</p>
    </div>
  );
}
