import { Container, Row, Col, Button } from 'react-bootstrap';

function Ex() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2 className="text-primary font-weight-bold">Section Title</h2>
          <p className="lead text-muted">A compelling introduction.</p>
          <Button variant="success" className="btn-sm">Learn More</Button>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <img src="src\assets\me.jpg" alt="Image" className="img-fluid rounded" />
        </Col>
      </Row>
    </Container>
  );
}

export default Ex;