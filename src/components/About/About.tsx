import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
            </Container>
        </Layout>
    );
}

export default About;