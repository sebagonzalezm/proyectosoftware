import Form from 'react-bootstrap/Form';

export function UploadFile(){
    return(
    <Form.Group controlId="formFileLg" className="mb-3">
    <Form.Label>Adjunta un archivo</Form.Label>
    <Form.Control type="file" size="lg" />
  </Form.Group>
    )
}

export function TituloyDescrip() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre del torneo</Form.Label>
        <Form.Control type="email" placeholder="Título" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción del torneo</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}
