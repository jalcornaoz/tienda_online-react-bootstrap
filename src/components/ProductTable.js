import ProductRow from "./ProductRow";
import { Table } from "react-bootstrap";

export default function ProductTable({ products }) {
  return (
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
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </Table>
  );
}
