import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faPython, faGitAlt, faHtml5, faJsSquare, faReact, faBootstrap, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from './components/AnimatedLetters/AnimatedLetters';
import Layout from './components/Layout/Layout';
import './App.css'

function App() {

  const stringArray1 = 'Welcome to my'.split('');
  const stringArray2 = 'Portfolio!'.split('');

  return (
    <Layout>
      <Container>
        <Col>
          <Row>
            <h1 className=" display-2 text-center" style={{}}>
              <AnimatedLetters strArray={stringArray1} idx={0} />
            </h1>
            <h1 className=" display-2 text-center" style={{paddingBottom: '1rem'}}>
              <AnimatedLetters strArray={stringArray2} idx={14} />
            </h1>
          </Row>
          <Row className="justify-content-center">
            <Card className="border-2 fade-in" style={{maxWidth: '75%'}} >
              <p className="text-center text-secondary m-2">
                Built using
                React <FontAwesomeIcon icon={faReact} title="React" /> ,
                TypeScript <FontAwesomeIcon icon={faJsSquare} title="TypeScript" /> ,
                Bootstrap <FontAwesomeIcon icon={faBootstrap} title="Bootstrap" /> ,
                HTML <FontAwesomeIcon icon={faHtml5} title="HTML5" /> , and
                CSS <FontAwesomeIcon icon={faCss3Alt} title="CSS3" />
              </p>
            </Card>
          </Row>
          {/* Spinning cube */}
          <Row style={{ paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='stage-cube-cont'>
              <div className='cubespinner'>
                <div className='face1'>
                  <FontAwesomeIcon icon={faJava} color='#DD0031' />
                </div>
                <div className='face2'>
                  <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                </div>
                <div className='face3'>
                  <FontAwesomeIcon icon={faPython} color='#28A4D9' />
                </div>
                <div className='face4'>
                  <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                </div>
                <div className='face5'>
                  <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                </div>
                <div className='face6'>
                  <FontAwesomeIcon icon={faGitAlt} color='#EC4V28' />
                </div>
              </div>
            </div>
          </Row>
        </Col>
      </Container>
    </Layout>

  )
}

export default App;
