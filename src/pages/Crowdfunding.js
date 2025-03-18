import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Table, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheckCircle, faHandHoldingDollar, faChartLine, faExternalLinkAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import './Crowdfunding.scss';

const Crowdfunding = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('usdt-erc20');
  const [copySuccess, setCopySuccess] = useState('');

  // Fundraising target amount in USDT
  const targetAmount = 10000;

  const walletAddresses = {
    'usdt-erc20': '0x7B4ea5aC2c013215B98BF0AC93d15BBE569B9b1c',
    'usdt-trc20': 'TH61hjviADHBB3He6UZ2ngK3zznijKpnHL',
    'usdt-bsc': '0x7B4ea5aC2c013215B98BF0AC93d15BBE569B9b1c',
  };

  // Block explorer URLs for different networks
  const getExplorerUrl = (cryptoType, address) => {
    switch(cryptoType) {
      case 'usdt-erc20':
        return `https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7?a=${address}`;
      case 'usdt-trc20':
        return `https://tronscan.org/#/address/${address}`;
      case 'usdt-bsc':
        return `https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955?a=${address}`;
      default:
        return '';
    }
  };

  // Sample donation data - replace with your actual data
  const donations = [
    // { id: 1, date: '2025-02-28', amount: '1000', token: 'USDT-ERC20', txHash: '0x123...abc' },
    // Add more donation records here
  ];

  const totalUsdtRaised = useMemo(() => {
    return donations.reduce((total, donation) => {
      const amount = parseFloat(donation.amount);
      if (donation.token.startsWith('USDT')) {
        return total + amount;
      }
      return total;
    }, 0);
  }, [donations]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(text);
    setTimeout(() => setCopySuccess(''), 2000);
  };

  return (
    <div className="crowdfunding-page">
      <div className="hero-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 className="mb-4">Exchange Listing Crowdfunding</h1>
              <p className="lead">
                Support EntropyX's journey to its first exchange listing! Your contribution
                will help us reach this significant milestone in our project's growth.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-4">
        <Row className="justify-content-center mb-5">
          <Col md={6}>
            <Card className="stats-card text-center">
              <Card.Body>
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <FontAwesomeIcon icon={faChartLine} className="stats-icon me-2" />
                  <h2 className="mb-0">Fundraising Progress</h2>
                </div>
                <div className="progress-container">
                  <h3 className="total-amount">${totalUsdtRaised.toLocaleString()} USDT</h3>
                  <p className="target-amount">Target: ${targetAmount.toLocaleString()} USDT</p>
                  <div className="progress">
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      style={{ width: `${Math.min((totalUsdtRaised / targetAmount) * 100, 100)}%` }}
                      aria-valuenow={totalUsdtRaised} 
                      aria-valuemin="0" 
                      aria-valuemax={targetAmount}
                    ></div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="mb-5">
              <Card.Body>
                <h3 className="mb-4">Select Payment Method</h3>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Nav variant="pills" className="crypto-nav">
                    <Nav.Item>
                      <Nav.Link 
                        active={selectedCrypto === 'usdt-erc20'}
                        onClick={() => setSelectedCrypto('usdt-erc20')}
                      >
                        USDT (ERC20)
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link 
                        active={selectedCrypto === 'usdt-trc20'}
                        onClick={() => setSelectedCrypto('usdt-trc20')}
                      >
                        USDT (TRC20)
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link 
                        active={selectedCrypto === 'usdt-bsc'}
                        onClick={() => setSelectedCrypto('usdt-bsc')}
                      >
                        USDT (BSC)
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  
                  <a 
                    href={getExplorerUrl(selectedCrypto, walletAddresses[selectedCrypto])} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="balance-check-link"
                    title="Check Balance"
                  >
                    Check Current Balance
                  </a>
                </div>

                <div className="wallet-address-container">
                  <div className="d-flex align-items-center">
                    <code className="flex-grow-1">{walletAddresses[selectedCrypto]}</code>
                    <button 
                      className="copy-button ms-2"
                      onClick={() => copyToClipboard(walletAddresses[selectedCrypto])}
                    >
                      <FontAwesomeIcon 
                        icon={copySuccess === walletAddresses[selectedCrypto] ? faCheckCircle : faCopy} 
                        className={copySuccess === walletAddresses[selectedCrypto] ? 'text-success' : ''}
                      />
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <h5>Important Notes:</h5>
                  <ul>
                    <li>Double-check the network type before sending (ERC20/TRC20/BSC for USDT)</li>
                    <li>Your contribution will be visible in the donation list below</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <h3 className="mb-4">Donation History</h3>
                <div className="alert alert-info mb-3">
                  <small>Donation data is not updated in real-time. To check the latest donations, please use the "Check Current Balance" link above.</small>
                </div>
                <div className="table-responsive">
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Token</th>
                        <th>Transaction Hash</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donations.map(donation => (
                        <tr key={donation.id}>
                          <td>{donation.date}</td>
                          <td>{donation.amount}</td>
                          <td>{donation.token}</td>
                          <td>
                            <code className="transaction-hash">{donation.txHash}</code>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Crowdfunding;
