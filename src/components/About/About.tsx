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

                <Row className="anime project-card">
                    <Col className="anime pt-4">
                        <h3 className="fade-in-prime-1 project-title">Who am I anyway?</h3>

                        <p className='abt-text'>
                            Hi! My Name is John Butterfield and I am a recent graduate from NC State with a degree in Computer Science. My specialty lies in full stack development and designing large
                            systems with different interacting sub-systems. I see myself as a generalist software developer with experience in Frontend, Backend, and Databases. I have created multiple
                            full-stack  applications for my coursework at university and am excited to apply this knowledge in the real world. I also have experience with AI/Machine Learning
                            algorithms, Computer Networking, Video Game Design, Data Ethics, and Technical Communication.
                        </p>
                        <p className='abt-text'>
                            Some of my hobbies include playing improv piano, road biking, video games, and old sci-fi movies. If I could describe myself in one sentence I would say that I am an open-minded, independent
                            thinker who loves to understand things at a deep level, and that I'm at my best when I have something technical to focus on. I tend to have high standards for myself and those around me
                            in the workplace but I still am understanding of how others act. I value fairness and intelligence and strive to embody a version of myself that is hardworking, sharp, and focused on the
                            future.
                        </p>

                    </Col>
                </Row>

                <br></br>

                <hr className="fade-in-prime-2 project-divider" />

                <Row className="anime project-card">
                    <Col className="anime pt-4">
                        <h3 className="fade-in-prime-2 project-title">How did I get interested in Software Development?</h3>
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
                <br></br>
                
            </Container>
        </Layout>
    );
}

export default About;