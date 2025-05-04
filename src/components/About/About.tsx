import { Container, Row, Col, Button } from 'react-bootstrap';

import meImg from "../../assets/me.jpg";
import Layout from '../Layout/Layout';

function About() {
  return (
    <Layout>
      <Container>
        <h1 className="display-2 text-center pb-3">About Me</h1>
        <Row className="">
          <Col className="card border-primary shadow-lg">
            
            <p className="lead text-muted">A compelling introduction.</p>
            <Button variant="success" className="btn-sm">Learn More</Button>
          </Col>
          <Col className="">
            <div className="justify-content-center">
              <img src={meImg} alt="Image" className="rounded-circle floating" style={{maxWidth: '80%', outline: '2px solid black'}} />
            </div>
          </Col> 
        </Row>
      </Container>
    </Layout>
  );
}

export default About;