// Products.js
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Products.css";
const Products = ({ products }) => {
  const { id } = useParams();

  const Product = products.find((product) => product.id === id);

  return (
    <div className="pro">
      <Navbar />
      <div className="page">
        <div className="pgleft">
          <img src={Product.image.props.src} alt={Product.name} />
        </div>
        <div className="pgright">
          <div className="wrapper">
            <p className="wrap1">{Product.name}</p>
            <p className="wrap2">{Product.price}</p>
            <p className="wrap3">
              Description
              <br />
              <br />
              {Product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
