import { Container, Row, Col } from 'react-bootstrap';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Layout from '../Layout/Layout';
import './index.css'
import me_pic from '../../assets/me.jpg'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  const stringArray0 = "Hi, I'm John Butterfield".split('');
  const stringArray1 = 'Welcome to my'.split('');
  const stringArray2 = 'Portfolio!'.split('');

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
              <AnimatedLetters strArray={stringArray0} idx={0} />
            </h1>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <div className='img-cont'>
              <Link to="/about">
                <img src={me_pic} alt="John Butterfield" className="me-image" />
              </Link>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1 className="text-center">
              <AnimatedLetters strArray={stringArray1} idx={24} />
            </h1>
            <h1 className="text-center">
              <AnimatedLetters strArray={stringArray2} idx={40} />
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center" style={{ paddingTop: '1rem' }}>
          <Col md="auto">
            <p className="desc text-center m-2">
              Software Engineer / NC State CSC Graduate
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Col md="auto">
            <div className="button-group">
              <Link to="contact" className="flat-button">CONTACT ME</Link>
              <Link to="projects" className="flat-button">MY PROJECTS</Link>
            </div>
          </Col>
        </Row>

      </Container>

    </Layout>

  )
}

export default Home;
