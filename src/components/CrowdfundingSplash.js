import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import './CrowdfundingSplash.scss';

const CrowdfundingSplash = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show splash after a short delay
    const timer = setTimeout(() => {
      // Check if we've shown this splash today
      const lastShown = localStorage.getItem('crowdfundingSplashLastShown');
      const today = new Date().toDateString();
      
      // if (lastShown !== today) {
      //   setShow(true);
      //   localStorage.setItem('crowdfundingSplashLastShown', today);
      // }
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setShow(false);
    navigate('/crowdfunding');
  };

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      centered
      className="crowdfunding-splash"
      size="lg"
    >
      <div className="splash-content" onClick={handleClick}>
        <div className="splash-header">
          <FontAwesomeIcon icon={faHandHoldingDollar} className="splash-icon" />
          <h2>Exchange Listing Crowdfunding</h2>
        </div>
        
        <div className="splash-body">
          <div className="highlight-box">
            <FontAwesomeIcon icon={faChartLine} className="chart-icon" />
            <div className="target">
              <span className="amount">$10,000</span>
              <span className="label">USDT Target</span>
            </div>
          </div>
          
          <p className="description">
            Support EntropyX's Journey to Major Exchanges!<br />
            Your contribution will help us reach this significant milestone.
          </p>

          <div className="cta-button">
            Click to Contribute Now
          </div>
        </div>

        <div className="splash-footer">
          <small>Click anywhere to view details</small>
        </div>
      </div>
    </Modal>
  );
};

export default CrowdfundingSplash;
