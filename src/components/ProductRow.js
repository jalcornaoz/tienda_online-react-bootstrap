import { LinkContainer } from "react-router-bootstrap";
export default function ProductRow({ product }) {
  return (
    <tr>
      <td style={{ textDecoration: "underline", cursor: "pointer" }}>
        <LinkContainer to={`/products/${product.id}`}>
          <span>{product.productDisplayName}</span>
        </LinkContainer>
      </td>
      <td>{product.masterCategory}</td>
      <td>{product.subCategory}</td>
      <td>{product.price}</td>
    </tr>
  );
}
