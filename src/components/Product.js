export default function Product({ product }) {
  return (
    <tr>
      <td>
        <a href={`/products/${product.id}`}>{product.productDisplayName}</a>
      </td>
      <td>{product.masterCategory}</td>
      <td>{product.subCategory}</td>
      <td>{product.price}</td>
    </tr>
  );
}
