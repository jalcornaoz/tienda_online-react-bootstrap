import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PageProduct() {
  const [product, setProduct] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3006/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(product);
  return (
    <div>
      <h2>{product.product.productDisplayName}</h2>
      <p>{product.masterCategory}</p>
      <p>{product.subCategory}</p>
      <p>{product.articuloType}</p>
      <p>{product.baseColor}</p>
      <p>{product.season}</p>
      <p>{product.year}</p>
      <p>{product.usage}</p>
      <p>{product.price}</p>
      <p>{product.gender}</p>
    </div>
  );
}
