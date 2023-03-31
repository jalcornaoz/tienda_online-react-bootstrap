import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const styles = { height: "20rem" };

export default function Contact() {
  return (
    <>
      <h1>Contactar</h1>
      <p>Contacta con nosotros rellenando el siguiente formulario:</p>

      <MapContainer
        style={styles}
        center={[41.6447588, -0.9253785]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[41.6447588, -0.9253785]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="ejemplo@correo.com"
          />
          <Form.Text className="text-muted">
            Nosotros no compartimos tu email con nadie.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Mantenme informado" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
}
