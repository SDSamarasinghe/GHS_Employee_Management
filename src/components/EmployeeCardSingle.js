import React from "react";
import { useNavigate } from "react-router";
import "./Store.css";

const EmployeeCardSingle = ({ image, name, price, id }) => {
  //must check endpoint
    // const deleteProduct = async () => {
    //   const { status } = await axios.delete(
    //     `http://florage-api.pasinduprabhashitha.com/api/Products/${id}`
    //   );
  
    //   alert("Product Deleted Successfully");
    // };
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt="product" />
      </div>

      <div
        className="store-store-product-title"
        style={{ color: "#6d6d6d", textAlign: "center" }}
      >
        <p className="my-2" style={{ fontSize: "18px", color: "#333" }}>
          <b>{name}</b>
        </p>
        <p style={{ fontSize: "24px", color: "#12af39" }}>
          <b>${price}</b>
        </p>

        <button
          onClick={() => {
            navigate(`/store/products/product/${id}`);
          }}
          id="store-store-details-button"
          className="btn btn-success"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default EmployeeCardSingle;
