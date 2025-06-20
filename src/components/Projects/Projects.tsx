import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faCube, faLink, faCodeBranch, faLock, faCamera, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../Layout/Layout';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

import './index.css';

const Projects: React.FC = () => {
    const projectsArray = "My  Projects".split('');

    return (
        <Layout>
            <Container className="projects-container">
                <Row>
                    <Col>
                        <h1 className="text-center p-4">
                            <AnimatedLetters strArray={projectsArray} idx={0} />
                        </h1>
                        <p className="text-center fade-in-1 project-subtitle">
                            Take a look at some of my favorite projects I've developed!
                        </p>
                    </Col>
                </Row>

                {/* --- Project 1: FreeFlow Forum --- */}
                <Row className="project-entry fade-in-prime-1">
                    <Col>
                        <div className="project-card">
                            <h2 className="project-title">
                                <FontAwesomeIcon icon={faProjectDiagram} className="project-icon" /> FreeFlow Forum
                            </h2>
                            <p className="project-desc">
                                A full-stack, decentralized crowdfunding platform built on the Ethereum blockchain. FreeFlow empowers users to propose and fund projects transparently. Its core innovation lies in a community-driven governance model where contributors vote on fund allocation using a token-based system. The platform was developed using agile methodologies, including one-week sprints and feature-based design.
                            </p>
                            <h4 className="tech-heading">Technologies Used:</h4>
                            <ul className="tech-list">
                                <li><strong>Frontend:</strong> React, Bootstrap, JavaScript, Ethers.js, MetaMask</li>
                                <li><strong>Backend:</strong> Python, FastAPI, MySQL</li>
                                <li><strong>Blockchain:</strong> Solidity, HardHat, OpenZeppelin, Sepolia Testnet</li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <hr className="fade-in-prime-1 project-divider" />

                {/* --- Project 2: IoT Camera --- */}
                <Row className="project-entry fade-in-prime-2">
                    <Col>
                        <div className="project-card">
                            <h2 className="project-title">
                                <FontAwesomeIcon icon={faCamera} className="project-icon" /> IoT Camera
                            </h2>
                            <p className="project-desc">
                                A real-time photo sharing system that integrates a Raspberry Pi with AWS IoT services. A physical button triggers the camera, publishing images via MQTT to AWS IoT Core. An AWS Lambda function processes and stores the images in an S3 bucket, while a separate Pygame-based slideshow application subscribes to the MQTT topic to display new photos in real-time.
                            </p>
                            <h4 className="tech-heading">Technologies Used:</h4>
                             <ul className="tech-list">
                                <li><strong>Hardware:</strong> Raspberry Pi</li>
                                <li><strong>Cloud:</strong> AWS IoT Core, AWS Lambda, AWS S3</li>
                                <li><strong>Software:</strong> Python, MQTT, Pygame</li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <hr className="fade-in-prime-2 project-divider" />

                {/* --- Projects 3 & 4: Golden Ratio Layout --- */}
                <Row>
                    <Col lg={7} className="project-entry fade-in-prime-3">
                        <div className="project-card h-100">
                             <h2 className="project-title">
                                <FontAwesomeIcon icon={faLock} className="project-icon" /> Encrypted File Transfer System
                            </h2>
                            <p className="project-desc">
                                A command-line utility for secure file transfers. This tool implements the LUCIFER block cipher in C for robust file encryption. A parallel Python component manages the socket-based file transfer, providing real-time statistics, including a weighted exponential average for transfer speeds. The project required deep engagement with low-level memory management and data structures.
                            </p>
                            <h4 className="tech-heading">Technologies Used:</h4>
                             <ul className="tech-list">
                                <li><strong>Core:</strong> C, Python</li>
                                <li><strong>Tools:</strong> GDB Debugger, Socket Programming</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={5} className="project-entry fade-in-prime-4">
                        <div className="project-card h-100">
                            <h2 className="project-title">
                                <FontAwesomeIcon icon={faCodeBranch} className="project-icon" /> Surveillance Manager
                            </h2>
                            <p className="project-desc">
                                A social network analysis tool modeling call records as a graph to find degrees of separation. Built in Java, it uses a custom array-based list with amortized $O(1)$ appends and a skip list for $O(\log n)$ lookups. A Depth-First Search (DFS) algorithm calculates the "hops" between nodes.
                            </p>
                            <h4 className="tech-heading">Technologies Used:</h4>
                             <ul className="tech-list">
                                <li><strong>Core:</strong> Java, Object-Oriented Programming</li>
                                <li><strong>Tools:</strong> JUnit, PMD, Eclipse IDE</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                
                <hr className="fade-in-prime-4 project-divider" />

                {/* --- Projects 5 & 6: Inverted Golden Ratio Layout --- */}
                <Row>
                    <Col lg={5} className="project-entry fade-in-prime-5">
                         <div className="project-card h-100">
                            <h2 className="project-title">
                                <FontAwesomeIcon icon={faLink} className="project-icon" /> Portfolio Website
                            </h2>
                            <p className="project-desc">
                                A personal portfolio built with React and TypeScript to showcase my work. Designed with a clean UI and subtle, meaningful animations. Future plans include adding interactive, game-based projects to further demonstrate JavaScript skills.
                            </p>
                            <h4 className="tech-heading">Technologies Used:</h4>
                            <ul className="tech-list">
                                <li><strong>Core:</strong> React, TypeScript, Bootstrap</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={7} className="project-entry fade-in-prime-6">
                         <div className="project-card h-100">
                            <h2 className="project-title">
                                <FontAwesomeIcon icon={faCube} className="project-icon" /> Minesweeper
                            </h2>
                            <p className="project-desc">
                                A complete Java implementation of the classic game, featuring a procedurally generated board and a GUI built with Java Swing. The core logic includes a recursive flood-fill algorithm for revealing tiles. The game state is managed through a game loop architecture with a persistent high-score system.
                            </p>
                            <h4 className="tech-heading">Technologies Used:</h4>
                             <ul className="tech-list">
                                <li><strong>Core:</strong> Java, Java Swing</li>
                                <li><strong>Concepts:</strong> Game Loop Architecture, OOP</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Projects;
