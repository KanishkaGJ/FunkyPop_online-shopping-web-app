import React from "react";
import { Link } from "react-router-dom";


const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, productName, size, color } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src='./public/images/cropTop.jpeg' alt={productName} />
              </div>
              <div className="content">
                <div className="header">{productName}</div>
                <div className="meta price">$ {size}</div>
                <div className="meta">{color}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;