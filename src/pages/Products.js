import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Product from "../components/Product";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3006/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) {
    return <div>Cargando...</div>;
  }
  return (
    <>
      <h1>Productos</h1>
      <p>Éstos son nuestro productos:</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Subcategoria</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </tbody>
      </Table>
    </>
  );
}
