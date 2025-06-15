import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../Layout/Layout';
import { faJava, faHtml5, faPython, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';


import './index.css'

const About: React.FC = () => {

  const abt_me_array = "About Me".split('');

  return (
    <Layout>
      <Container>
        
        <Row>
          <Col>
            <h1 className="text-center p-4">
              <AnimatedLetters strArray={abt_me_array} idx={0} />
            </h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3 className="anime text-center">
              You can download my resume{""}
              <a href="/assets/JohnButterfieldResume.pdf" download>
                <span style={{ margin: '0 5px' }}>here</span>
              </a>!
            </h3>
          </Col>
        </Row>

        <Row>
          <Col className="anime pt-4">
            <h3>How did I get interested in Software Development?</h3>
            <p className="abt-text">
              I was first introduced to programming at 12, when I joined my middle school’s programming club. We used Scratch, 
              a block-based, visual language that made it easy to create simple games by dragging together logic “building blocks.”
            </p>
            <p className="abt-text">
              Suddenly, software wasn’t just magic and I understood it was something people built, one piece at a time. I was amazed that someone could get so good at 
              programming they could create something like Minecraft, my favorite game at the time. Even though I didn’t fully 
              understand how it all worked, I was hooked. I began looking at software with a new mindset: “How did they do that?” instead of just blindly accepting the magic.
            </p>
            <p className="abt-text">
              That curiosity stuck with me. I kept tinkering with computers and eventually realized this wasn’t just a hobby, it 
              was a future I wanted to pursue. I got into NC State’s Computer Science program, where I’ve spent the past four years 
              learning programming languages, frameworks, team collaboration, and most importantly, how frustrating programming can be!
            </p>
            <p className="abt-text">
              What makes coding so appealing to me is the unique creative problem-solving it demands. It touches every industry and 
              has reshaped the world, yet it remains a deeply personal, technical craft. Every challenge solved feels like a victory, 
              not just for the progress made, but for the knowledge I gained. And that’s knowledge I’m excited to apply going forward.
            </p>

          </Col>
        </Row>

        <hr className="anime my-4 bg-dark" style={{ height: '4px' }} />

        <Row className="anime">
          <Col>

            <h2 className="pb-4">
              Programming Language Experience
            </h2>
            
            <h3 className="mt-2">Primary Programming Languages</h3>
            <p>
              <i>these are languages i've used for larger projects</i>
            </p>
            <p className="abt-text p-2 ms-2">C, Python, Java, JavaScript, Solidity, HTML/CSS</p>

            <h3>Secondary Programming Languages</h3>
            <p>
              <i>these are languages i've used in passing</i>
            </p>
            <p className="abt-text p-2 ms-2">R, TypeScript, Julia, SQL, Bash</p>

            

            
          </Col>
          <Col className="p-5 mt-5">
            {/* Spinning cube */}
            <div className='stage-cube-cont'>
              <div className='cubespinner'>
                <div className='face1'><FontAwesomeIcon icon={faJava} color='#DD0031' /></div>
                <div className='face2'><FontAwesomeIcon icon={faHtml5} color='#F06529' /></div>
                <div className='face3'><FontAwesomeIcon icon={faPython} color='#28A4D9' /></div>
                <div className='face4'><FontAwesomeIcon icon={faReact} color='#5ED4F4' /></div>
                <div className='face5'><FontAwesomeIcon icon={faJsSquare} color='#EFD81D' /></div>
                <div className='face6'><FontAwesomeIcon icon={faGitAlt} color='#EC4V28' /></div>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="anime my-4 bg-dark" style={{ height: '4px' }} />

        <Row className="anime">
          <Col>

            <h2 className="mb-4">
              Software Development Techniques and Tools
            </h2>

            <h3>Developer Tools</h3>
            <p className="abt-text p-2">
              GitHub, Git, Linux, Docker, AWS (S3, Lambda, IoT Core), MySQL, MQTT, HardHat, MetaMask, React
            </p>

            <h3 className="mb-3">Software Testing Methods</h3>
            <h4 className="ms-1">Unit Testing</h4>
            <p className="abt-text p-2">Java: JUnit, JavaScript: Mocha/Chai</p>
            <h4 className="ms-1">System Testing</h4>
            <p className="abt-text p-2">Acceptance Testing, User Stories & Use Case Validation</p>

            <h3>General Programming Concepts</h3>
            <p className="abt-text p-2">
              Object Oriented Programming, Client-Server & Publish-Subscribe Architectures, Agile & Waterfall Development Methodologies,
              UML Class and Sequence Design Diagramming
            </p>

            <h3>Soft Skills</h3>
            <p className="abt-text p-2">
              Experienced in teamwork, leadership, and professional communication through academic projects and real-world roles.
              Strong foundation in ethical reasoning, problem-solving, and collaboration.
              Comfortable working with diverse teams and communicating across technical and non-technical audiences.
            </p>
          </Col>


        </Row>

        <hr className="anime my-4 bg-dark" style={{ height: '4px' }} />

        <Row className="anime">
          <Col className=''>
            <h2>Relevant Coursework</h2>
            <h4>
              NC State Computer Science Graduate
            </h4>
            <p>
              <i>click a class to learn more</i>
            </p>
            <ul className="class-list mb-4">
              <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=14000030" target="_blank" rel="noreferrer">Software Engineering</a></li>
              <li><a href="https://www.engineeringonline.ncsu.edu/course/csc-216-software-development-fundamentals/" target="_blank" rel="noreferrer">Object-Oriented Design in Java</a></li>
              <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=17500048" target="_blank" rel="noreferrer">C and Software Tools</a></li>
              <li><a href="https://www.engineeringonline.ncsu.edu/course/csc-316-data-structures-and-algorithms/" target="_blank" rel="noreferrer">Data Structures and Algorithms</a></li>
              <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=15" target="_blank" rel="noreferrer">Numerical Methods</a></li>
              <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=8000026" target="_blank" rel="noreferrer">Operating Systems</a></li>
              <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=14" target="_blank" rel="noreferrer">Applications of Python</a></li>
              <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=22" target="_blank" rel="noreferrer">Data and Computer Communications Networks</a></li>
              <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=14500031" target="_blank" rel="noreferrer">Computer Networking Lab</a></li>
              <li><a href="https://english.chass.ncsu.edu/undergraduate/professional-writing/course-descriptions/" target="_blank" rel="noreferrer">Engineering and Technical Communication</a></li>
              <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=17500046" target="_blank" rel="noreferrer">IoT Systems</a></li>
              <li><a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=500008" target="_blank" rel="noreferrer">Ethics in Computing</a></li>
              <li><a href="https://wolfware.ncsu.edu/courses/details/?sis_id=SIS:2021:8:1:PHI:227:001" target="_blank" rel="noreferrer">Data Ethics</a></li>
            </ul>
            <br/>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default About;
