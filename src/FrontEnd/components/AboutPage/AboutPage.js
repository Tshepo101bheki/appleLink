import { Link } from 'react-router-dom';
import './AboutPage.css';
import LandingFooter from '../Footer/LandingFooter';

const AboutPage = () => {
  return (
    <div className="ap-root">
      {/* Simple Header for About Page */}
      <header className="ap-header">
        <div className="ap-header-container">
          <div className="ap-header-inner">
            <Link to="/" className="ap-logo">
              <span className="ap-logo-icon">🍎</span>
              <span className="ap-logo-text">AppleLink</span>
            </Link>
            <div className="ap-nav">
              <Link 
                to="/" 
                className="ap-nav-link"
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="ap-nav-link"
              >
                Shop
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* About Content */}
      <div className="ap-content">
        <h1 className="ap-hero-title">
          About AppleLink
        </h1>
        <p className="ap-hero-subtitle">
          Our mission is to make premium Apple technology accessible to everyone through quality refurbished products.
        </p>

        <div className="ap-grid">
          <div>
            <h2 className="ap-section-title">Our Story</h2>
            <p className="ap-section-text">
              Founded in 2020, AppleLink began with a simple idea: everyone should have access to premium Apple technology without the premium price tag. We noticed that many people wanted Apple products but couldn't justify the high cost of brand-new devices.
            </p>
            <p className="ap-section-text">
              We started by sourcing high-quality used Apple devices and refurbishing them to meet Apple's stringent quality standards. Today, we've helped thousands of customers save 30-50% on their Apple purchases while providing the same quality and performance they expect.
            </p>
          </div>
          <div>
            <h2 className="ap-section-title">Our Process</h2>
            <p className="ap-section-text">
              Every device that passes through our doors undergoes a rigorous 10-point certification process. We don't just clean and polish – we thoroughly test, repair, and certify each product to ensure it meets our high standards.
            </p>
            <ul className="ap-list">
              <li className="ap-list-item">
                <span className="ap-list-icon">✓</span>
                <span>Comprehensive diagnostics and testing</span>
              </li>
              <li className="ap-list-item">
                <span className="ap-list-icon">✓</span>
                <span>Professional cleaning and sanitization</span>
              </li>
              <li className="ap-list-item">
                <span className="ap-list-icon">✓</span>
                <span>Genuine Apple parts for replacements</span>
              </li>
              <li className="ap-list-item">
                <span className="ap-list-icon">✓</span>
                <span>Final quality assurance inspection</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="ap-values">
          <h2 className="ap-values-title">Our Values</h2>
          <div className="ap-values-grid">
            <div className="ap-value-card">
              <div className="ap-value-icon">🛡️</div>
              <h3 className="ap-value-name">Quality</h3>
              <p className="ap-value-description">We never compromise on quality. Every product meets our strict standards.</p>
            </div>
            <div className="ap-value-card">
              <div className="ap-value-icon">💚</div>
              <h3 className="ap-value-name">Sustainability</h3>
              <p className="ap-value-description">By refurbishing devices, we reduce electronic waste and promote sustainability.</p>
            </div>
            <div className="ap-value-card">
              <div className="ap-value-icon">🤝</div>
              <h3 className="ap-value-name">Trust</h3>
              <p className="ap-value-description">We build lasting relationships with our customers through transparency and reliability.</p>
            </div>
          </div>
        </div>

        <div className="ap-cta">
          <Link 
            to="/shop" 
            className="ap-cta-button"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <LandingFooter />
    </div>
  );
};

export default AboutPage;