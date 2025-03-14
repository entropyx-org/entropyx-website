import React from 'react';
import { Container, Row, Col, Nav, Card, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faBolt,
  faServer,
  faCoins,
  faNetworkWired,
  faShieldHalved,
  faCode,
  faFileArrowDown
} from '@fortawesome/free-solid-svg-icons';
import './Whitepaper.scss';

const Whitepaper = () => {
  const sections = [
    { id: 'abstract', title: 'Abstract', icon: faBook },
    { id: 'introduction', title: 'Introduction', icon: faBolt },
    { id: 'technical', title: 'Technical Architecture', icon: faServer },
    { id: 'economic', title: 'Economic Model', icon: faCoins },
    { id: 'network', title: 'Network Architecture', icon: faNetworkWired },
    { id: 'security', title: 'Security', icon: faShieldHalved },
    { id: 'development', title: 'Development', icon: faCode }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="whitepaper-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <h1>EntropyX Whitepaper</h1>
              <p className="lead">
                Technical foundations, economic model, and unique features of the EntropyX network
              </p>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <DropdownButton
                  variant="outline-light"
                  size="lg"
                  title={
                    <>
                      <FontAwesomeIcon icon={faFileArrowDown} className="me-2" />
                      Download PDF Whitepaper
                    </>
                  }
                >
                  <Dropdown.Item href="/whitepapers/WHITEPAPER-EN.pdf" target="_blank">
                    English Version
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="py-5">
        <Row>
          {/* Navigation Sidebar */}
          <Col lg={3} className="d-none d-lg-block">
            <div className="whitepaper-nav-wrapper">
              <Nav className="flex-column whitepaper-nav">
                {sections.map((section) => (
                  <Nav.Link
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="d-flex align-items-center"
                  >
                    <FontAwesomeIcon icon={section.icon} className="me-2" />
                    {section.title}
                  </Nav.Link>
                ))}
              </Nav>
            </div>
          </Col>

          {/* Content */}
          <Col lg={9}>
            <div className="whitepaper-content">
              <Card className="content-section" id="abstract">
                <Card.Body>
                  <h2>
                    <FontAwesomeIcon icon={faBook} className="me-2" />
                    Abstract
                  </h2>
                  <p>
                    EntropyX is an innovative blockchain protocol that builds upon the groundbreaking GHOSTDAG protocol originally developed by Kaspa. While maintaining the core benefits of the BlockDAG architecture, EntropyX introduces several key improvements, including a novel token burning mechanism, adjusted tokenomics, and optimized block parameters.
                  </p>
                </Card.Body>
              </Card>

              <Card className="content-section" id="introduction">
                <Card.Body>
                  <h2>
                    <FontAwesomeIcon icon={faBolt} className="me-2" />
                    Introduction
                  </h2>
                  <div className="section-content">
                    <h3>Background</h3>
                    <p>
                      The blockchain industry continues to face challenges in achieving the optimal balance between scalability, security, and decentralization - the so-called "blockchain trilemma." While many solutions have been proposed, most sacrifice one aspect to enhance others.
                    </p>
                    <h3>Vision</h3>
                    <p>
                      EntropyX aims to create a more sustainable and efficient blockchain ecosystem by implementing deflationary tokenomics through its unique burning mechanism, while leveraging the high throughput capabilities of the BlockDAG architecture.
                    </p>
                    <div className="feature-grid">
                      <Card className="feature-card">
                        <Card.Body>
                          <h4>High Performance</h4>
                          <p>Creating a high-performance blockchain network with minimal confirmation latency</p>
                        </Card.Body>
                      </Card>
                      <Card className="feature-card">
                        <Card.Body>
                          <h4>Self-Regulating</h4>
                          <p>Establishing a self-regulating economic model through algorithmic token burning</p>
                        </Card.Body>
                      </Card>
                      <Card className="feature-card">
                        <Card.Body>
                          <h4>Scalable Platform</h4>
                          <p>Providing a scalable platform for decentralized applications</p>
                        </Card.Body>
                      </Card>
                      <Card className="feature-card">
                        <Card.Body>
                          <h4>True Decentralization</h4>
                          <p>Maintaining true decentralization without compromising security</p>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card className="content-section" id="technical">
                <Card.Body>
                  <h2>
                    <FontAwesomeIcon icon={faServer} className="me-2" />
                    Technical Architecture
                  </h2>
                  <div className="section-content">
                    <h3>GHOSTDAG Protocol</h3>
                    <p>
                      EntropyX implements the GHOSTDAG protocol, which represents a significant evolution in blockchain technology. Unlike traditional blockchain systems that must choose a single block at each height, GHOSTDAG allows parallel blocks to coexist and be ordered in consensus.
                    </p>
                    <Card className="stats-card">
                      <Card.Body>
                        <h4>Performance Comparison</h4>
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Metric</th>
                                <th>Bitcoin</th>
                                <th>Ethereum</th>
                                <th>EntropyX</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Block Time</td>
                                <td>600s</td>
                                <td>12s</td>
                                <td>1s</td>
                              </tr>
                              <tr>
                                <td>TPS (avg)</td>
                                <td>7</td>
                                <td>15</td>
                                <td>1000+</td>
                              </tr>
                              <tr>
                                <td>Finality</td>
                                <td>60 min</td>
                                <td>6 min</td>
                                <td>10s</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Card.Body>
              </Card>

              <Card className="content-section" id="economic">
                <Card.Body>
                  <h2>
                    <FontAwesomeIcon icon={faCoins} className="me-2" />
                    Economic Model
                  </h2>
                  <div className="section-content">
                    <h3>3.1 Token Supply and Halving Mechanism</h3>
                    <p>
                      EntropyX (ENX) implements a carefully designed economic model aimed at long-term sustainability. 
                      The most notable feature of this model is its innovative burning mechanism, which will achieve 
                      extreme deflation from an initial supply of 21 billion ENX to a final supply of approximately 
                      21 million ENX, representing a 99% reduction.
                    </p>

                    <div className="tokenomics-grid mb-4">
                      <Card className="info-card">
                        <Card.Body>
                          <h4>Supply Parameters</h4>
                          <ul>
                            <li>
                              <span className="label">Initial Total Supply:</span>
                              <span className="value">21 billion ENX</span>
                            </li>
                            <li>
                              <span className="label">Final Total Supply:</span>
                              <span className="value">~21 million ENX</span>
                            </li>
                            <li>
                              <span className="label">Initial Block Reward:</span>
                              <span className="value">333 ENX</span>
                            </li>
                            <li>
                              <span className="label">Halving Cycle:</span>
                              <span className="value">1 year</span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Card>

                      <Card className="info-card">
                        <Card.Body>
                          <h4>Block Calculation</h4>
                          <ul>
                            <li>
                              <span className="label">Block Time:</span>
                              <span className="value">~1 second/block</span>
                            </li>
                            <li>
                              <span className="label">Blocks per day:</span>
                              <span className="value">86,400</span>
                            </li>
                            <li>
                              <span className="label">Blocks per year:</span>
                              <span className="value">31,536,000</span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </div>

                    <Card className="mb-4">
                      <Card.Body>
                        <h4>Halving Schedule</h4>
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Year</th>
                                <th>Block Reward</th>
                                <th>Annual Output</th>
                                <th>Cumulative Output</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>333 ENX</td>
                                <td>10.5B ENX</td>
                                <td>10.5B ENX</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>166.5 ENX</td>
                                <td>5.25B ENX</td>
                                <td>15.75B ENX</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>83.25 ENX</td>
                                <td>2.625B ENX</td>
                                <td>18.375B ENX</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>41.625 ENX</td>
                                <td>1.3125B ENX</td>
                                <td>19.6875B ENX</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>20.8125 ENX</td>
                                <td>0.65625B ENX</td>
                                <td>20.34375B ENX</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-muted small alert alert-info mt-3">
                          <strong>Note:</strong> The above data does not account for deflationary factors caused by the token burning mechanism; 
                          actual circulating supply may be significantly lower than these figures.
                        </p>
                      </Card.Body>
                    </Card>

                    <h3>3.1.2 Halving Cycle Innovation</h3>
                    <p>
                      EntropyX has designed an optimized halving mechanism based on in-depth research of existing blockchain projects.
                      This innovative halving mechanism design avoids both BTC's early inflation pressure issues and Kaspa's miner exodus problems due to rapid decay, laying a foundation for the network's long-term healthy development.
                    </p>

                    <Card className="mb-4">
                      <Card.Body>
                        <h4>Analysis of Existing Network Issues</h4>
                        <div className="comparison-grid">
                          <div className="comparison-item">
                            <h5>BTC (4-year halving)</h5>
                            <ul>
                              <li>High early inflation pressure due to long reduction cycle</li>
                              <li>Not suitable for emerging network development needs</li>
                              <li>Only appropriate for projects with established market positions</li>
                            </ul>
                          </div>
                          <div className="comparison-item">
                            <h5>Kaspa (annual halving with 5% monthly decay)</h5>
                            <ul>
                              <li>Rapid reward decay affects miner enthusiasm</li>
                              <li>Leads to unstable hashrate, impacting network security</li>
                              <li>Miner earnings struggle to cover operational costs</li>
                            </ul>
                          </div>
                        </div>
                        <h5 className="mt-4">EntropyX Optimization Solution</h5>
                        <ul>
                          <li>Annual halving cycle: Balances inflation control and miner earnings</li>
                          <li>Combined with token burning: Dual mechanism ensures healthy economic model</li>
                          <li>Sustainable miner incentives: Maintains network security and stability</li>
                        </ul>
                      </Card.Body>
                    </Card>

                    <h3>3.1.3 Fair Launch Mechanism</h3>
                    <div className="fair-launch-section">
                      <Card className="mb-4">
                        <Card.Body>
                          <h4>Zero Reservation Policy</h4>
                          <ul className="list-unstyled">
                            <li>✓ Zero founding team reservation: Ensures team alignment with community interests</li>
                            <li>✓ No ICO, no pre-sale: Prevents early token concentration</li>
                            <li>✓ No team token lockup: Fully market-driven operation</li>
                          </ul>
                          <h4 className="mt-4">Single Issuance Channel</h4>
                          <ul className="list-unstyled">
                            <li>✓ New tokens obtained only through PoW mining</li>
                            <li>✓ Prevents any form of additional issuance</li>
                            <li>✓ Ensures completely transparent distribution process</li>
                          </ul>
                          <div className="alert alert-danger mt-4">
                            <strong>Important Note:</strong> During the initial project launch, as the network is in its startup phase, 
                            the founding team will provide initial hashrate guarantee to ensure normal network operation and security. 
                            The block rewards obtained from this activity will be used as startup funds for the EntropyX network and 
                            subsequent operations and promotion. It is guaranteed that the reward tokens obtained by the founding team 
                            during this phase will not exceed 500 million ENX, approximately 2.381% of the total supply.
                          </div>
                        </Card.Body>
                      </Card>
                    </div>

                    <h3>3.2 Innovative Burning Mechanism</h3>
                    <p>
                      EntropyX network implements an innovative token burning mechanism, which is the core and unique feature of this project.
                      This mechanism is designed to achieve controlled deflation and create long-term value for token holders.
                    </p>

                    <Card className="mb-4">
                      <Card.Body>
                        <h4>Burning Rules</h4>
                        <ul className="list-unstyled">
                          <li>✓ Initial Burn Amount: Fixed 210 ENX per transaction</li>
                          <li>✓ Dynamic Adjustment: Burn amount halves in sync with mining halving cycles</li>
                          <li>✓ Termination Condition: Burning stops when network total supply deflates to 21 million ENX</li>
                        </ul>
                      </Card.Body>
                    </Card>

                    <Card className="mb-4">
                      <Card.Body>
                        <h4>Burn Impact Scenarios</h4>
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Scenario</th>
                                <th>Daily Transactions</th>
                                <th>Year 1 Annual Burn</th>
                                <th>Year 1 Deflation Rate</th>
                                <th>Year 1 Post-Burn Supply</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Low Volume</td>
                                <td>1,000 tx/day</td>
                                <td>0.077B ENX</td>
                                <td>0.73%</td>
                                <td>10.423B ENX</td>
                              </tr>
                              <tr>
                                <td>Medium Volume</td>
                                <td>10,000 tx/day</td>
                                <td>0.77B ENX</td>
                                <td>7.33%</td>
                                <td>9.73B ENX</td>
                              </tr>
                              <tr>
                                <td>High Volume</td>
                                <td>100,000 tx/day</td>
                                <td>7.7B ENX</td>
                                <td>73.33%</td>
                                <td>2.8B ENX</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-muted small mt-3">
                          Note: Above predictions are based on fixed daily transaction volumes; actual figures will fluctuate with network adoption.
                        </p>
                      </Card.Body>
                    </Card>

                    <Card className="mb-4">
                      <Card.Body>
                        <h4>Price Impact Prediction (High Volume Scenario)</h4>
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Year</th>
                                <th>Annual Deflation Rate</th>
                                <th>Theoretical Price Growth</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>73.33%</td>
                                <td>+275%</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>24.13%</td>
                                <td>+270%</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>10.34%</td>
                                <td>+269%</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>4.88%</td>
                                <td>+247%</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>2.36%</td>
                                <td>+247%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="text-muted small mt-3">
                          <div style={{color: 'red'}}>* This prediction is only to illustrate possible relationship between deflation and token price, not investment advice!<br /> </div>
                          * Based on ideal market conditions; actual prices affected by multiple market factors<br />
                          * Theoretical price growth calculation: Original Supply/Post-Deflation Supply - 1
                        </div>
                      </Card.Body>
                    </Card>

                    <Row>
                      <Col md={6}>
                        <Card className="mb-4">
                          <Card.Body>
                            <h4>Economic Model Advantages</h4>
                            <ul>
                              <li>Predictable Deflation Path: Creates predictable deflationary effects through fixed burn amounts</li>
                              <li>Automatic Market Adjustment: Burn mechanism automatically adjusts with network activity</li>
                              <li>Long-term Value Protection: Protects token holders' interests through supply reduction</li>
                            </ul>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6}>
                        <Card className="mb-4">
                          <Card.Body>
                            <h4>Holder Benefits</h4>
                            <ul>
                              <li>Natural Appreciation: Token value increases as supply decreases</li>
                              <li>Inflation Protection: Burning mechanism offsets mining-induced inflation</li>
                              <li>Long-term Incentives: Encourages holding over frequent trading</li>
                            </ul>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>

                    <Card className="mb-4">
                      <Card.Body>
                        <h4>Market Impact Analysis</h4>
                        <div className="row">
                          <div className="col-md-4">
                            <h5>Supply Impact</h5>
                            <ul>
                              <li>Continuous supply reduction</li>
                              <li>Accelerated scarcity with usage</li>
                              <li>Natural price support</li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h5>User Behavior</h5>
                            <ul>
                              <li>Efficient transaction batching</li>
                              <li>Long-term holding rewards</li>
                              <li>Strategic network usage</li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h5>Market Dynamics</h5>
                            <ul>
                              <li>Adoption-driven deflation</li>
                              <li>Utility-cost balance</li>
                              <li>Manipulation protection</li>
                            </ul>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>

                    <div className="alert alert-danger">
                      <strong>Important Note:</strong> The burn impact scenarios and price predictions are for illustration purposes only. 
                      Actual results will depend on network adoption, market conditions, and other factors. This is not investment advice.
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card className="content-section" id="network">
                <Card.Body>
                  <h2>
                    <FontAwesomeIcon icon={faNetworkWired} className="me-2" />
                    Network Architecture
                  </h2>
                  <div className="section-content">
                    <div className="network-specs">
                      <Card className="info-card">
                        <Card.Body>
                          <h4>Network Ports</h4>
                          <ul>
                            <li>
                              <span className="label">P2P Communication:</span>
                              <span className="value">16111</span>
                            </li>
                            <li>
                              <span className="label">GRPC Server:</span>
                              <span className="value">16110</span>
                            </li>
                            <li>
                              <span className="label">WRPC Server:</span>
                              <span className="value">17110</span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card className="content-section" id="security">
                <Card.Body>
                  <h2>
                    <FontAwesomeIcon icon={faShieldHalved} className="me-2" />
                    Security
                  </h2>
                  <div className="section-content">
                    <p>
                      The security model of EntropyX is built upon multiple layers of protection, including cryptographic security, network security, and economic security through the PoW consensus mechanism.
                    </p>
                  </div>
                </Card.Body>
              </Card>

              <Card className="content-section" id="development">
                <Card.Body>
                  <h2>
                    <FontAwesomeIcon icon={faCode} className="me-2" />
                    Development
                  </h2>
                  <div className="section-content">
                    <p>
                      EntropyX is committed to open-source development and community collaboration. The protocol is continuously evolving with regular updates and improvements based on community feedback and technological advancements.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Whitepaper;
