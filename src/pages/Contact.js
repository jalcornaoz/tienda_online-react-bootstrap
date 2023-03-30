import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Contact() {
  return (
    <>
      <h1>Contactar</h1>
      <p>Contacta con nosotros rellenando el siguiente formulario:</p>
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
