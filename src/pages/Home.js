import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import {
  faShieldHalved,
  faRocket,
  faBolt,
  faFire,
  faCubes,
  faUsers,
  faCode,
  faLock,
  faHandshake,
  faChartLine,
  faExchangeAlt,
  faVoteYea
} from '@fortawesome/free-solid-svg-icons';

import { TeamMembers } from '../components/Team';
import { getTotalBurnedAmount } from '../services/api';
import { formatENXAmount } from '../utils/format';
import CrowdfundingSplash from '../components/CrowdfundingSplash';

const Home = () => {
  const [totalBurned, setTotalBurned] = useState('********');

  useEffect(() => {
    const fetchTotalBurned = async () => {
      try {
        const data = await getTotalBurnedAmount();
        setTotalBurned(formatENXAmount(data.totalBurned, 2, false));
      } catch (error) {
        console.error('Error fetching total burned amount:', error);
        setTotalBurned('********');
      }
    };

    fetchTotalBurned();
  }, []);

  const roadmapItems = [
    {
      phase: 'Phase 1 - Q1 2025',
      title: 'Infrastructure',
      description: 'Network launch and core protocol implementation',
      icon: faRocket,
      items: [
        'GHOSTDAG protocol mainnet launch',
        '1-second block time',
        'Initial token burning mechanism'
      ]
    },
    {
      phase: 'Phase 2 - Q3 2025',
      title: 'Smart Contracts',
      description: 'EVM-compatible smart contract layer',
      icon: faCode,
      items: [
        'EVM-compatible smart contracts',
        'Developer SDK and tools',
        'Security audit completion'
      ]
    },
    {
      phase: 'Phase 3 - Q2 2026',
      title: 'DeFi Infrastructure',
      description: 'Advanced DeFi ecosystem development',
      icon: faExchangeAlt,
      items: [
        'Native AMM-based DEX',
        'Advanced liquidity pools',
        'Cross-chain bridges'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-dark">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <h1>Welcome to EntropyX</h1>
              <p className="lead">
                A next-generation blockchain platform featuring sub-second confirmations, GHOSTDAG protocol, and an innovative token burning mechanism for sustainable tokenomics.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Button variant="outline-light" href="https://wallet.entropyx.org" target="_blank" size="lg">
                  Launch Web Wallet
                </Button>
                <Button variant="outline-light" as={Link} to="/whitepaper" size="lg">
                  Read Whitepaper
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Token Burning Mechanism Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-gradient">Revolutionary Token Burning</h2>
              <p className="lead text-secondary">
                Our unique token burning mechanism ensures continuous value preservation
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="text-center mb-4 mb-md-0">
              <div className="burning-animation">
                <FontAwesomeIcon icon={faFire} className="text-primary burning-icon" size="6x" />
              </div>
              <h3 className="mt-4">210 ENX Per Transaction</h3>
              <p className="lead">
                Every transaction burns 210 ENX, creating a deflationary mechanism that increases scarcity over time
              </p>
              <Button 
                variant="outline-primary" 
                size="lg" 
                href="/burns"
                className="mt-3"
              >
                View Burn Statistics
              </Button>
            </Col>
            <Col md={6}>
            <Card className="stats-card mb-4">
                <Card.Body className="text-center">
                  <h4>Total Burned ENX</h4>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <FontAwesomeIcon icon={faFire} className="text-primary" />
                    <h2 className="mb-0 text-gradient">{totalBurned}</h2>
                  </div>
                  <p className="text-secondary mt-2">
                    Total tokens permanently removed from circulation
                  </p>
                </Card.Body>
              </Card>
              <Card className="stats-card">
                <Card.Body>
                  <h4>Token Burning Benefits</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <FontAwesomeIcon icon={faChartLine} className="text-primary me-2" />
                      Continuous value appreciation potential
                    </li>
                    <li className="mb-3">
                      <FontAwesomeIcon icon={faShieldHalved} className="text-primary me-2" />
                      Protection against inflation
                    </li>
                    <li className="mb-3">
                      <FontAwesomeIcon icon={faCubes} className="text-primary me-2" />
                      Sustainable tokenomics model
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CrowdfundingSplash Section */}
      <section>
        <CrowdfundingSplash />
      </section>

      {/* Features Section */}
      <section className="py-5 bg-dark">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-gradient">Key Features</h2>
              <p className="lead text-secondary">
                Discover what makes EntropyX unique in the blockchain space
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 feature-card">
                <Card.Body className="text-center">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faFire} />
                  </div>
                  <h4>Token Burning</h4>
                  <p>
                    Revolutionary burning mechanism of 210 ENX per transaction ensures
                    long-term value preservation and sustainable tokenomics.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 feature-card">
                <Card.Body className="text-center">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                  <h4>High Performance</h4>
                  <p>
                    Process 1000+ transactions per second with sub-second finality
                    through our optimized GHOSTDAG protocol implementation.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 feature-card">
                <Card.Body className="text-center">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faShieldHalved} />
                  </div>
                  <h4>Enhanced Security</h4>
                  <p>
                    Robust security through Proof of Work consensus and innovative
                    cryptographic techniques.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project Stats Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-gradient">Project Information</h2>
              <p className="lead text-secondary">
                Key metrics and statistics of the EntropyX network
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={3}>
              <Card className="h-100 stats-card">
                <Card.Body className="text-center">
                  <FontAwesomeIcon icon={faChartLine} className="text-primary mb-3" size="2x" />
                  <h3>21B ENX</h3>
                  <p className="text-secondary">Maximum Supply</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 stats-card">
                <Card.Body className="text-center">
                  <FontAwesomeIcon icon={faFire} className="text-primary mb-3" size="2x" />
                  <h3>210 ENX</h3>
                  <p className="text-secondary">Initial Burn/TX</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 stats-card">
                <Card.Body className="text-center">
                  <FontAwesomeIcon icon={faRocket} className="text-primary mb-3" size="2x" />
                  <h3>333 ENX</h3>
                  <p className="text-secondary">Initial Block Reward</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 stats-card">
                <Card.Body className="text-center">
                  <FontAwesomeIcon icon={faCubes} className="text-primary mb-3" size="2x" />
                  <h3>1s</h3>
                  <p className="text-secondary">Block Time</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Roadmap Section */}
      <section className="py-5 bg-dark">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-gradient">Development Roadmap</h2>
              <p className="lead text-secondary">
                Our journey to build a comprehensive blockchain ecosystem
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {roadmapItems.map((item, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 roadmap-card">
                  <Card.Body>
                    <div className="text-primary mb-3">
                      <FontAwesomeIcon icon={item.icon} size="2x" />
                    </div>
                    <h5 className="text-gradient">{item.phase}</h5>
                    <h4>{item.title}</h4>
                    <p className="text-secondary">{item.description}</p>
                    <ul className="list-unstyled">
                      {item.items.map((listItem, i) => (
                        <li key={i} className="mb-2">
                          <FontAwesomeIcon icon={faRocket} className="text-primary me-2" />
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <Button as={Link} to="/roadmap" variant="outline-primary" size="lg">
                View Full Roadmap
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-gradient">Core Team</h2>
              <p className="lead text-secondary">
                Meet our dedicated team of blockchain experts
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <TeamMembers />
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <Button as={Link} to="/about" variant="outline-primary" size="lg">
                Learn More About Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
