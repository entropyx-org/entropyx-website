import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import {
  faUsers,
  faBalanceScale,
  faVoteYea,
  faHandshake,
  faLock,
  faCode
} from '@fortawesome/free-solid-svg-icons';

import { TeamMembers } from '../components/Team';
import './About.scss';

const About = () => {
  return (
    <div className="about-page">
      <div className="hero-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 className="mb-4">About EntropyX</h1>
              <p className="lead">
                A community-driven blockchain network powered by GHOSTDAG protocol, combining 
                high performance with true decentralization through innovative tokenomics 
                and advanced governance mechanisms.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="mb-5">
          <Col md={12}>
            <Card className="vision-card">
              <Card.Body>
                <h3 className="text-gradient mb-4">Our Vision</h3>
                <p className="text-secondary">
                  We aim to create a high-performance, sustainable blockchain ecosystem that combines
                  the best of proven technologies with innovative features. Our unique burning mechanism
                  and adjusted supply parameters create a deflationary economic model that benefits
                  long-term holders while maintaining network security and decentralization.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12}>
            <h2 className="text-center text-gradient mb-4">DAO Governance</h2>
            <Row className="g-4">
              <Col md={4}>
                <Card className="feature-card h-100">
                  <Card.Body className="text-center">
                    <div className="feature-icon mb-3">
                      <FontAwesomeIcon icon={faVoteYea} />
                    </div>
                    <h4>Voting Power</h4>
                    <p className="text-secondary">
                      Token holders can participate in governance decisions through a transparent
                      and secure voting system.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="feature-card h-100">
                  <Card.Body className="text-center">
                    <div className="feature-icon mb-3">
                      <FontAwesomeIcon icon={faBalanceScale} />
                    </div>
                    <h4>Fair Governance</h4>
                    <p className="text-secondary">
                      Balanced decision-making process ensures all stakeholders have a voice in
                      the network's future.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="feature-card h-100">
                  <Card.Body className="text-center">
                    <div className="feature-icon mb-3">
                      <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <h4>Community First</h4>
                    <p className="text-secondary">
                      Development priorities and protocol upgrades are determined by the
                      community through DAO voting.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <h2 className="text-center text-gradient mb-4">Core Team</h2>
            <Row className="g-4">
              <TeamMembers />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
