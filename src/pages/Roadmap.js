import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faExchangeAlt,
  faLock,
  faRocket,
  faServer,
  faUsers,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import './Roadmap.scss';

const RoadmapPhase = ({ phase, title, description, items, icon, status }) => (
  <div className={`roadmap-item ${status}`}>
    <div className="roadmap-icon">
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className="roadmap-content">
      <div className="phase-header">
        <span className="phase-tag">{phase}</span>
        <h3>{title}</h3>
      </div>
      <p className="phase-description">{description}</p>
      <ul className="phase-items">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Roadmap = () => {
  const phases = [
    {
      phase: 'Phase 1 (2025 Q1)',
      title: 'Infrastructure',
      description: 'Network launch and core protocol, establishing GHOSTDAG protocol-based infrastructure with sub-second confirmations.',
      icon: faServer,
      status: 'completed',
      items: [
        'Deploy optimized GHOSTDAG protocol mainnet',
        'Implement 1-second block time and dynamic difficulty adjustment',
        'Implement initial token burning mechanism (210 ENX/transaction)',
        'Release web wallet and block explorer',
        'Establish P2P network architecture with optimized block propagation'
      ]
    },
    {
      phase: 'Phase 2 (2025 Q3)',
      title: 'Smart Contract Layer',
      description: 'Extend network functionality with EVM-compatible smart contracts and advanced development tools.',
      icon: faCode,
      status: 'in-progress',
      items: [
        'Deploy EVM-compatible smart contract layer',
        'Implement parallel transaction validation for smart contracts',
        'Release complete developer documentation and SDK',
        'Launch smart contract testnet and debugging tools',
        'Complete security audit of smart contract infrastructure'
      ]
    },
    {
      phase: 'Phase 3 (2026 Q2)',
      title: 'Advanced DeFi Infrastructure',
      description: 'Build comprehensive DeFi ecosystem including high-performance AMM protocols and cross-chain functionality.',
      icon: faExchangeAlt,
      status: 'upcoming',
      items: [
        'Launch native decentralized exchange based on AMM protocol',
        'Implement advanced liquidity pools with yield optimization',
        'Deploy cross-chain bridges to major networks',
        'Introduce liquidity mining programs with dynamic rewards',
        'Integrate with major DeFi protocols'
      ]
    },
    {
      phase: 'Phase 4 (2026 Q4)',
      title: 'DAO Governance',
      description: 'Implement comprehensive on-chain governance with advanced voting mechanisms.',
      icon: faUsers,
      status: 'upcoming',
      items: [
        'Launch on-chain voting mechanism',
        'Implement community treasury management',
        'Deploy protocol upgrade process',
        'Create governance proposal framework',
        'Establish community-driven development fund',
        'Implement stake-weighted voting system'
      ]
    },
    {
      phase: 'Phase 5 (2027)',
      title: 'Ecosystem Maturity',
      description: 'Expand EntropyX ecosystem through strategic partnerships.',
      icon: faChartLine,
      status: 'upcoming',
      items: [
        'Expand cross-chain integration network',
        'Implement advanced developer tools',
        'Deploy ecosystem growth programs',
        'Establish strategic industry partnerships',
        'Create developer incentive programs'
      ]
    }
  ];

  return (
    <div className="roadmap-page">
      <div className="hero-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 className="mb-4">Development Roadmap</h1>
              <p className="lead">
                Our comprehensive development plan focuses on building a secure, scalable, and user-friendly blockchain ecosystem.
                Each phase brings us closer to our vision of a high-performance network with advanced features.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      
      <Container className="py-5">
        <div className="roadmap-timeline">
          {phases.map((phase, index) => (
            <RoadmapPhase key={index} {...phase} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Roadmap;
