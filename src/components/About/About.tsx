import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../Layout/Layout';
import { faJava, faHtml5, faPython, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faCode, faToolbox, faUniversity } from '@fortawesome/free-solid-svg-icons';

import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import tuffy from '../../assets/tuffy.png';

import './index.css'; 

const About: React.FC = () => {
    const abtMeArray = "About Me".split('');

    return (
        <Layout>
            <Container className="projects-container">
                <Row>
                    <Col>
                        <h1 className="text-center p-4">
                            <AnimatedLetters strArray={abtMeArray} idx={0} />
                        </h1>
                         <h3 className="text-center fade-in-prime-1 resume-link">
                           You can download my resume{" "}
                           <a href="/assets/JohnButterfieldResume.pdf" download>
                             here
                           </a>!
                         </h3>
                    </Col>
                </Row>

                {/* --- The Story Card --- */}
                <Row className="project-entry fade-in-prime-2">
                    <Col>
                        <div className="project-card">
                            <h2 className="project-title">
                                <FontAwesomeIcon icon={faIdCard} className="project-icon" /> My Journey Into Code
                            </h2>
                            <p className="project-desc">
                                I was first introduced to programming at 12, joining my middle school’s programming club where we built small projects in Scratch. 
                                Suddenly, software wasn’t just magic; I understood it was something people built, one piece at a time. Even though I didn’t fully
                                 understand how it all worked, I was hooked. I began looking at software with a new mindset: “How did they do that?”
                            </p>
                            <p className="project-desc">
                                That curiosity stuck with me. I kept tinkering with computers and eventually realized this was a future I could pursue. I got into 
                                NC State’s Computer Science program, where I’ve spent the past four years learning languages, frameworks, team collaboration, 
                                and most importantly, how to embrace the frustration and triumph of programming. What makes coding so appealing to me is the 
                                unique creative problem-solving it demands. Every challenge solved feels like a victory, and that’s knowledge I’m excited to 
                                apply going forward.
                            </p>
                        </div>
                    </Col>
                </Row>
                
                <hr className="fade-in-prime-2 project-divider" />

                {/* --- Skills & Cube Layout --- */}
                <Row>
                    <Col lg={7} className="project-entry fade-in-prime-3">
                        <div className="project-card h-100">
                             <h2 className="project-title">
                                <FontAwesomeIcon icon={faCode} className="project-icon" /> Languages & Concepts
                            </h2>
                            <h4 className="tech-heading">Primary Languages</h4>
                            <p className="language-text">C, Python, Java, JavaScript, Solidity, HTML/CSS</p>

                            <h4 className="tech-heading">Secondary Languages</h4>
                            <p className="language-text">R, TypeScript, Julia, SQL, Bash, C#, C++</p>

                            <h4 className="tech-heading">General Concepts</h4>
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
                                    <h4 className="tech-heading">Developer Tools</h4>
                                    <ul className="tech-list">
                                        <li>Git & GitHub</li>
                                        <li>Linux & Docker</li>
                                        <li>AWS (S3, Lambda, IoT Core)</li>
                                        <li>MySQL, MQTT</li>
                                        <li>HardHat & MetaMask</li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <h4 className="tech-heading">Testing & Soft Skills</h4>
                                    <ul className="tech-list">
                                        <li>Unit Testing (JUnit, Mocha/Chai)</li>
                                        <li>System & Acceptance Testing</li>
                                        <li>Teamwork & Leadership</li>
                                        <li>Ethical Reasoning</li>
                                        <li>Professional Communication</li>
                                    </ul>
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
                          <h4 className="tech-heading">NC State Computer Science Graduate</h4>
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

export default About;