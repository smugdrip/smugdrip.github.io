import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faPython, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from './components/AnimatedLetters/AnimatedLetters';
import Layout from './components/Layout/Layout';
import './App.css'

function App() {

  const stringArray1 = 'Welcome to my Portfolio!'.split('')

  return (
    <Layout>
      <Container>
        <Col>
          <Row>
            <h1 className="text-center" style={{paddingBottom: '1rem', paddingTop: '1rem'}}>
              <AnimatedLetters strArray={stringArray1} idx={0} />
            </h1>
          </Row>
          <Row>
            <p className="text-center">
              built using vite, react, typescript, and bootstrap
            </p>
          </Row>
          <Row>
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

export default App
