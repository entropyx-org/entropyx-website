import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faCode,
  faLock,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

const TeamMember = ({ role, description, icon }) => (
  <Card className="h-100 team-card">
    <Card.Body className="text-center">
      <div className="member-icon mb-3">
        <FontAwesomeIcon icon={icon} size="2x" />
      </div>
      <h4 className="text-primary">{role}</h4>
      <p className="text-secondary">{description}</p>
    </Card.Body>
  </Card>
);

export const TeamMembers = () => (
  <>
    {teamMembers.map(member => (
      <Col md={3} key={member.role}>
        <TeamMember key={member.role} {...member} />
      </Col>
    ))}
  </>
);

const teamMembers = [
  {
    role: 'Core Developer',
    description: 'Senior blockchain developer specializing in GHOSTDAG protocol implementation and distributed systems architecture with 8+ years of experience.',
    icon: faCode
  },
  {
    role: 'Security Expert',
    description: 'Blockchain security specialist with expertise in smart contract auditing, cryptography, and network security infrastructure.',
    icon: faLock
  },
  {
    role: 'Community Leader',
    description: 'Experienced community strategist with deep knowledge in blockchain ecosystems, DeFi protocols, and developer relations.',
    icon: faUsers
  },
  {
    role: 'Technical Advisor',
    description: 'Seasoned blockchain architect with extensive experience in consensus mechanisms, scalability solutions, and cross-chain protocols.',
    icon: faHandshake
  }
];
