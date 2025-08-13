import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

function ProductDetails() {
  const { id } = useParams();
  const { products, loading } = useContext(ProductsContext);

  if (loading) return <h2>Yüklənir...</h2>

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Məhsul tapılmadı!</h2>;

return (
  <div className="container product-details">
    <div className="image-section">
      <img src={product.image} alt={product.title} />
    </div>
    <div className="details-section">
      <h1>{product.title}</h1>
      <p>Qiymət: {product.price} AZN</p>
      <p>{product.description}</p>
      <Link to="/products">Əvvəlki səhifəyə qayıt</Link>
    </div>
  </div>
);
}

export default ProductDetails;
