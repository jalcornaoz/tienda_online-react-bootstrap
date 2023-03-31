import { useEffect, useState } from "react";
import axios from "axios";
import ProductTable from "../components/ProductTable";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3006/products")
      .then((response) => setProducts(response.data));
    //.catch((error)=>)
  }, []);

  if (products.length === 0) {
    return <div>Cargando...</div>;
  }
  return (
    <>
      <h1>Productos</h1>
      <p>Éstos son nuestro productos:</p>
      <ProductTable products={products} />
    </>
  );
}
