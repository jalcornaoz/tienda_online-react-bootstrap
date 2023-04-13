import Card from "react-bootstrap/Card";
import { FixedSizeGrid as Grid } from "react-window";

export default function OptionGrid(props) {
  const { items, onClick, goUp, itemDefault } = props;
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {goUp && (
        <Card
          key={"Subir"}
          style={{ width: "10rem", margin: ".25rem" }}
          onClick={onClick}
        >
          <Card.Img
            variant="top"
            src={`https://cdn-icons-png.flaticon.com/512/61/61449.png?w=740&t=st=1681382454~exp=1681383054~hmac=3f900e15ed7119e2191d58bf2799d68895566115faaf97840e4d841cdd08c378`}
            alt="Volver"
          />
          <Card.Body>
            <Card.Title>Volver</Card.Title>
          </Card.Body>
        </Card>
      )}
      {items.map(({ name, id, price }) => (
        <Card
          key={name}
          style={{ width: "10rem", margin: ".25rem" }}
          onClick={onClick}
          id={id}
          bg={itemDefault === name ? "primary" : ""}
          text={itemDefault === name ? "white" : ""}
        >
          {price && <Card.Header id={id}>{price}</Card.Header>}
          <Card.Img
            variant="top"
            src={`https://juanda.certweb.infenlaces.com/images/${id}.jpg`}
            alt={name}
            id={id}
          />
          <Card.Body>
            <Card.Title id={id}>{name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
