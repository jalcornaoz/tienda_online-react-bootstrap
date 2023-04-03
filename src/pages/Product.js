import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

export default function PageProduct() {
  const [product, setProduct] = useState(null);
  let { id: productID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3006/products/${productID}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [productID]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  const {
    productDisplayName: name,
    price,
    gender,
    articleType: type,
    baseColour: colour,
    season,
    year,
    usage,
    masterCategory: category,
    subCategory,
  } = product;
  return (
    <>
      <h1>Producto</h1>
      <Card style={{ width: "30rem" }}>
        <Card.Img
          variant="top"
          src={`https://juanda.certweb.infenlaces.com/images/${productID}.jpg`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <b>Genero:</b> {gender}
            <br />
            <b>Tipo:</b> {type}
            <br />
            <b>Color:</b> {colour}
            <br />
            <b>Temporada:</b> {season}
            <br />
            <b>Año:</b> {year}
            <br />
            <b>Uso:</b> {usage}
            <br />
            <b>Precio:</b> {price}€
          </Card.Text>
          {/* <LinkContainer to="/products" state={{ category: category }}> */}
          <LinkContainer to={`/products/${category}`}>
            <Card.Link>{category}</Card.Link>
          </LinkContainer>
          <LinkContainer to={`/products/${category}/${subCategory}`}>
            <Card.Link>{subCategory}</Card.Link>
          </LinkContainer>
        </Card.Body>
        <Button variant="primary">Comprar</Button>
      </Card>
    </>
  );
}
