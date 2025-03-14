import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFire,
  faChartLine,
  faShieldHalved,
  faCubes,
  faExchangeAlt,
  faHistory,
  faArrowTrendDown,
  faCoins
} from '@fortawesome/free-solid-svg-icons';
import './Burns.scss';
import { getTotalBurnedAmount, queryBurnRecords, getCoinSupply } from '../services/api';
import { formatENXAmount, sompiToENX } from '../utils/format';

const Burns = () => {
  const [totalBurned, setTotalBurned] = useState('********');
  const [burnRecords, setBurnRecords] = useState([]);
  const [coinSupply, setCoinSupply] = useState('**.**');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coinSupply, totalData, recentData] = await Promise.all([
          getCoinSupply(),
          getTotalBurnedAmount(),
          queryBurnRecords({ limit: 10, offset: 0 })
        ]);
        
        setTotalBurned(formatENXAmount(totalData.totalBurned));

        const supplyAmount = sompiToENX(coinSupply.circulatingSompi);
        const totalBurnedAmount = sompiToENX(totalData.totalBurned);
        setCoinSupply((totalBurnedAmount/supplyAmount*1000).toFixed(2));

        if(recentData.success && recentData.data) {
          const {records} = recentData.data;
          setBurnRecords(records.map(record => ({
            id: record.blockDaaScore,
            timestamp: new Date(parseInt(record.timestamp)).toLocaleString(),
            txHash: record.blockHash,
            amount: formatENXAmount(record.burnedValue),
            totalBurned: formatENXAmount(record.totalBurned)
          })));
        } else {
          setBurnRecords([]);
        }
      } catch (error) {
        console.error('Error fetching burn data:', error);
        setTotalBurned('********');
        setCoinSupply('**.**');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-dark">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <h1>EntropyX Burning Mechanism</h1>
              <p className="lead">
                Our innovative token burning mechanism achieves extreme deflation from an initial supply
                of 21 billion ENX to a final supply of approximately 21 million ENX.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Burn Statistics Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 stats-card">
                <Card.Body className="text-center">
                  <FontAwesomeIcon icon={faFire} className="text-primary mb-3" size="2x" />
                  <h4>Fixed Burn Amount</h4>
                  <h2 className="text-gradient">210 ENX</h2>
                  <p className="text-secondary">Per Transaction</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 stats-card">
                <Card.Body className="text-center">
                  <FontAwesomeIcon icon={faCoins} className="text-primary mb-3" size="2x" />
                  <h4>Total Burned ENX</h4>
                  <h2 className="text-gradient">{totalBurned}</h2>
                  <p className="text-secondary">Cumulative amount burned</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 stats-card">
                <Card.Body className="text-center">
                  <FontAwesomeIcon icon={faArrowTrendDown} className="text-primary mb-3" size="2x" />
                  <h4>Deflation Rate</h4>
                  <h2 className="text-gradient">{coinSupply}‰</h2>
                  <p className="text-secondary">Of circulating supply</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Burning Mechanism Details */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="text-gradient">Deflationary Mechanism</h2>
              <p className="lead">
                Our unique burning mechanism combines with the halving cycle to create
                a predictable path to extreme deflation.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100">
                <Card.Body>
                  <h3 className="mb-4">Burning Rules</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <FontAwesomeIcon icon={faFire} className="text-primary me-2" />
                      Fixed 210 ENX burned per transaction
                    </li>
                    <li className="mb-3">
                      <FontAwesomeIcon icon={faExchangeAlt} className="text-primary me-2" />
                      Burn amount halves with mining cycles annually
                    </li>
                    <li className="mb-3">
                      <FontAwesomeIcon icon={faCoins} className="text-primary me-2" />
                      Target final supply: 21 million ENX
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body>
                  <h3 className="mb-4">Economic Benefits</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <FontAwesomeIcon icon={faChartLine} className="text-primary me-2" />
                      Predictable deflation path through fixed burn amounts
                    </li>
                    <li className="mb-3">
                      <FontAwesomeIcon icon={faShieldHalved} className="text-primary me-2" />
                      Automatic market adjustment based on network activity
                    </li>
                    <li className="mb-3">
                      <FontAwesomeIcon icon={faCubes} className="text-primary me-2" />
                      Long-term value protection for token holders
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Deflation Scenarios */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="text-gradient">Deflation Scenarios</h2>
              <p className="lead">
                The impact of our burning mechanism varies based on network activity.
                Here's how different transaction volumes affect token supply.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Table responsive className="table-hover">
                    <thead>
                      <tr>
                        <th>Scenario</th>
                        <th>Daily Transactions</th>
                        <th>Annual Burn (Year 1)</th>
                        <th>Deflation Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Low Volume</td>
                        <td>1,000</td>
                        <td>0.077B ENX</td>
                        <td>0.73%</td>
                      </tr>
                      <tr>
                        <td>Medium Volume</td>
                        <td>10,000</td>
                        <td>0.77B ENX</td>
                        <td>7.33%</td>
                      </tr>
                      <tr>
                        <td>High Volume</td>
                        <td>100,000</td>
                        <td>7.7B ENX</td>
                        <td>73.33%</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Recent Burns */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="text-gradient">Recent Burns</h2>
              <p className="lead">
                Track the latest token burns in real-time
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Table responsive className="table-hover">
                    <thead>
                      <tr>
                        <th>Transaction</th>
                        <th>Amount</th>
                        <th>Total Burned</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="4" className="text-center">Loading...</td>
                        </tr>
                      ) : burnRecords.length === 0 ? (
                        <tr>
                          <td colSpan="4" className="text-center">No burn records found</td>
                        </tr>
                      ) : (
                        burnRecords.map(record => (
                          <tr key={record.id}>
                            <td width="50%">
                              <a
                                href={`https://explorer.entropyx.org/blocks/${record.txHash}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                              >
                                {record.txHash}
                              </a>
                            </td>
                            <td>{record.amount}</td>
                            <td>{record.totalBurned}</td>
                            <td>{record.timestamp}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                  <div className="text-center mt-4">
                    <Button
                      variant="outline-primary"
                      href="https://explorer.entropyx.org/burns"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faHistory} className="me-2" />
                      View All Burns
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Burns;
