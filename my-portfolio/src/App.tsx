import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button onClick={() => navigate('Ex')}>
            navigate to example
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <div>
          <p>
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </Row>
    </Container>

  )
}

export default App
