import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faDiscord,
  faTelegram,
  faTwitter,
  faMedium
} from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const version = 'v1.0.0'; // You can update this version number as needed

  const socialLinks = [
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/entropyx-org'
    },
    {
      name: 'Discord',
      icon: faDiscord,
      url: 'https://discord.gg/entropyx'
    },
    {
      name: 'Telegram',
      icon: faTelegram,
      url: 'https://t.me/EntropyX1'
    },
    {
      name: 'X',
      icon: faTwitter,
      url: 'https://x.com/entropyETF'
    }
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Whitepaper', path: '/whitepaper' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Web Wallet', url: 'https://wallet.entropyx.org' },
    { name: 'Block Explorer', url: 'https://explorer.entropyx.org' }
  ];

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-main">
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5>About EntropyX</h5>
            <p>
              EntropyX is a high-performance blockchain platform with sub-second finality
              and innovative token burning mechanism, built on the GHOSTDAG protocol.
            </p>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5>Quick Links</h5>
            <ul className="quick-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.path ? (
                    <Link to={link.path}>{link.name}</Link>
                  ) : (
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={4} md={12}>
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter for the latest updates and announcements.</p>
            <form className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">
              © {currentYear} EntropyX. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">
              <span className="version">{version}</span>
              <span className="separator">|</span>
              <a href="/terms">Terms</a>
              <span className="separator">|</span>
              <a href="/privacy">Privacy</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
