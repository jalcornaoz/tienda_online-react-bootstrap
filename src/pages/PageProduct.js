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
      <h2>{product.productDisplayName}</h2>
      <p><b>Categoria:</b> {product.masterCategory}</p>
      <p><b>Subcategoria:</b> {product.subCategory}</p>
      <p><b>Genero:</b> {product.gender}</p>
      <p><b>Tipo:</b> {product.articleType}</p>
      <p><b>Color:</b> {product.baseColour}</p>
      <p><b>Temporada:</b> {product.season}</p>
      <p><b>Año:</b> {product.year}</p>
      <p><b>Uso:</b> {product.usage}</p>
      <p><b>Precio:</b> {product.price}</p>
    </div>
  );
}
