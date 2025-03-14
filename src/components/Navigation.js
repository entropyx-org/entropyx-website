import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWallet, faCompass } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      onToggle={(value) => setExpanded(value)}
      ref={navbarRef}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src="/icon-glow.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
              alt="EntropyX Logo"
            />
            EntropyX
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/burns">
              <Nav.Link>Burns</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/roadmap">
              <Nav.Link>Roadmap</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/whitepaper">
              <Nav.Link>Whitepaper</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Nav.Link href="https://wallet.entropyx.org" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWallet} className="me-1" />
              Web Wallet
            </Nav.Link>
            <Nav.Link href="https://explorer.entropyx.org" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faCompass} className="me-1" />
              Explorer
            </Nav.Link>
            <Nav.Link href="https://github.com/entropyx-org" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="me-1" />
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
