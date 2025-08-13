import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";

function Products() {

  const [searchText, setSearchText] = useState("");
  const { products, loading } = useContext(ProductsContext); 
  if (loading) return <h2>Yüklənir...</h2>;
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase()) 
  );

  return (
    <>
      <div className="container">
        <h2>Product store</h2>

        <input
          type="text"
          className="search-input"
          value={searchText}
          placeholder="Məhsulu axtarın..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      

      <div className="flex-container">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <p>{product.description.slice(0, 100)}</p>
             <Link to={`/products/${product.id}`}>Details</Link>
          </div>
        ))}
      </div>



    </>
  );
}

export default Products;
