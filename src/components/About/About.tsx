import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

import Layout from '../Layout/Layout';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

import './index.css';

const About: React.FC = () => {
    const abtMeArray = "About Me".split('');

    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center p-4">
                            <AnimatedLetters strArray={abtMeArray} idx={0} />
                        </h1>
                    </Col>
                </Row>
                
                <hr className="fade-in-prime-1 project-divider" />

                <Row className="">
                    <Col lg={7} className="project-entry fade-in-prime-2">
                        <div className="project-card h-100">
                            <h2 className="project-title">
                                <FontAwesomeIcon icon={faIdCard} className="project-icon" /> How did I get started?
                            </h2>
                            <p className="project-desc">
                                I was first introduced to programming at 12, joining my middle school’s programming club where we built small projects in Scratch. 
                                Suddenly, software wasn’t just magic; I understood it was something people built, one piece at a time. Even though I didn’t fully 
                                understand how it all worked, I was hooked. I began looking at software with a new mindset: “How did they do that?”
                            </p>
                            <p className="project-desc">
                                That curiosity stuck with me. I kept tinkering with computers and eventually realized this was a future I could pursue. I got into 
                                NC State’s Computer Science program, where I’ve spent the past four years learning languages, frameworks, team collaboration, and 
                                most importantly, how to embrace the frustration and triumph of programming.
                            </p>
                             <p className="project-desc">
                                What makes coding so appealing to me is the unique creative problem-solving it demands. Every challenge solved feels like a victory, 
                                and that’s knowledge I’m excited to apply going forward.
                            </p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </Layout>
    );
}

export default About;