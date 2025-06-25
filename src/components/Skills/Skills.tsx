import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../Layout/Layout';
import { faJava, faHtml5, faPython, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faToolbox, faUniversity } from '@fortawesome/free-solid-svg-icons';

import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import tuffy from '../../assets/tuffy.png';

import './index.css'; 

const Skills: React.FC = () => {
    
    const abtMeArray = "Skills and Experience".split('');


    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center p-4">
                            <AnimatedLetters strArray={abtMeArray} idx={0} />
                        </h1>
                         <h3 className="text-center fade-in-prime-1 resume-link pb-3">
                           You can download my resume{" "}
                           <a href="/assets/John-Butterfield-Resume.pdf" download>
                             here!
                           </a>
                         </h3>
                    </Col>
                </Row>
                
                <hr className="fade-in-prime-2 project-divider" />

                <Row>
                    <Col lg={7} className="project-entry fade-in-prime-3">
                        <div className="project-card h-100">
                             <h2 className="project-title">
                                <FontAwesomeIcon icon={faCode} className="project-icon" /> Languages & Concepts
                            </h2>
                            <h4 className="">Primary Languages</h4>
                            <p className=""><i>these are languages i've used for large projects</i></p>
                            <p className="abt-text ps-3">C, Python, Java, JavaScript, Solidity, HTML/CSS, SQL</p>

                            <h4 className="">Secondary Languages</h4>
                            <p className=""><i>these are languages i've used in passing</i></p>
                            <p className="abt-text ps-3">R, TypeScript, Julia, Bash, C#, C++</p>

                            <h4 className="">General Concepts</h4>
                            <ul className="tech-list">
                                <li>Object-Oriented Programming</li>
                                <li>Client-Server & Publish-Subscribe Architectures</li>
                                <li>Agile & Waterfall Methodologies</li>
                                <li>UML Class and Sequence Diagramming</li>
                                <li>Feature-Based Design & Requirements Engineering</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={5} className="project-entry fade-in-prime-4">
                        <div className="h-100 d-flex align-items-center justify-content-center">
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
                        </div>
                    </Col>
                </Row>
                
                <hr className="fade-in-prime-4 project-divider" />
                
                {/* --- Tools & Soft Skills Card --- */}
                <Row className="project-entry fade-in-prime-5">
                    <Col>
                        <div className="project-card">
                             <h2 className="project-title">
                                <FontAwesomeIcon icon={faToolbox} className="project-icon" /> Tools & Methods
                            </h2>
                            <Row>
                                <Col md={6}>
                                    <h4 className="">Developer Tools</h4>
                                    <ul className="tech-list">
                                        <li>Git & GitHub</li>
                                        <li>Linux & Bash Scripting</li>
                                        <li>Docker</li>
                                        <li>AWS (S3, Lambda, IoT Core)</li>
                                        <li>MySQL</li>
                                        <li>MQTT</li>
                                        <li>HardHat & MetaMask</li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <h4 className="">Software Testing</h4>
                                    <ul className="tech-list">
                                        <li>Unit Testing (JUnit, Mocha/Chai)</li>
                                        <li>System Testing</li>
                                        <li>User-Story Based Testing</li>
                                        <li>Use Case Validation</li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <h4>Soft Skills</h4>

                                    <p className="abt-text p-2">

                                        Experienced in teamwork, leadership, and professional communication through academic projects and real-world roles.

                                        Strong foundation in ethical reasoning, problem-solving, and collaboration.

                                        Comfortable working with diverse teams and communicating across technical and non-technical audiences.

                                    </p>


                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                <hr className="fade-in-prime-5 project-divider" />

                {/* --- Education & Image Layout --- */}
                 <Row>
                    <Col lg={7} className="project-entry fade-in-prime-6">
                        <div className="project-card h-100">
                          <h2 className="project-title">
                            <FontAwesomeIcon icon={faUniversity} className="project-icon" /> Education
                          </h2>
                          <h4 className="">NC State Computer Science Graduate</h4>
                          <p className="project-desc mb-3"><i>Key coursework (click to learn more):</i></p>
                          <ul className="tech-list course-list">
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
                            <li><a href="https://wolfware.ncsu.edu/courses/details/?sis_id=SIS:2022:8:1:BUS:340:305" target="_blank" rel="noreferrer">Information Systems Management</a></li>
                          </ul>
                        </div>
                    </Col>
                    <Col lg={5} className="project-entry fade-in-prime-7">
                        <div className="h-100 d-flex align-items-center justify-content-center p-3">
                             <img
                                 src={tuffy}
                                 alt="NC State Mascot Tuffy"
                                 className="img-fluid rounded"
                             />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Skills;