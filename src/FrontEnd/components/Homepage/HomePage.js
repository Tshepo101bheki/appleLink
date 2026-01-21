import { Link } from 'react-router-dom';
import './HomePage.css';
import LandingFooter from '../Footer/LandingFooter';

// Hero Image
import heroImage from '../assets/hero.jpeg';

// Images for product categories
const iphoneImage = "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const macbookImage = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const ipadImage = "https://images.unsplash.com/photo-1546868875-74a20200b39f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const appleWatchImage = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const airpodsImage = "https://images.unsplash.com/photo-1546869021-dc19d7d0a4c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const accessoriesImage = "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const HomePage = () => {
  const productCategories = [
    {
      key: "iphone",
      name: "iPhones",
      img: iphoneImage,
      description: "Latest & previous generation iPhones",
      color: "#000000"
    },
    {
      key: "mac",
      name: "MacBooks",
      img: macbookImage,
      description: "MacBook Air, Pro & iMac",
      color: "#1d1d1f"
    },
    {
      key: "ipad",
      name: "iPads",
      img: ipadImage,
      description: "iPad, iPad Air & iPad Pro",
      color: "#000000"
    },
    {
      key: "watch",
      name: "Apple Watch",
      img: appleWatchImage,
      description: "Series 3 through latest",
      color: "#000000"
    },
    {
      key: "airpods",
      name: "AirPods",
      img: airpodsImage,
      description: "All AirPods models",
      color: "#f5f5f7"
    },
    {
      key: "accessories",
      name: "Accessories",
      img: accessoriesImage,
      description: "Cases, chargers & more",
      color: "#f5f5f7"
    }
  ];

  const features = [
    {
      icon: "✓",
      title: "Certified Refurbished",
      description: "Every product undergoes rigorous testing, cleaning, and certification to meet Apple's quality standards.",
    },
    {
      icon: "💸",
      title: "Significant Savings",
      description: "Save 30-50% on premium Apple products without compromising on quality or performance.",
    },
    {
      icon: "🚚",
      title: "Fast & Free Shipping",
      description: "Free 2-day shipping on all orders. Quick delivery to get your Apple products faster.",
    },
    {
      icon: "👨‍💼",
      title: "Expert Support",
      description: "Apple-certified technicians and dedicated customer support for all your questions.",
    },
    {
      icon: "🛡️",
      title: "Warranty Included",
      description: "1-year comprehensive warranty on all products with optional extended coverage available.",
    },
    {
      icon: "🍎",
      title: "Genuine Apple Quality",
      description: "All products come with genuine Apple parts and are restored to like-new condition.",
    }
  ];

  return (
    <div className="hp-root">

      {/* ================= Header ================= */}
      <header className="hp-header">
        <div className="hp-header-inner">
          <Link to="/" className="hp-logo">
            <span className="hp-logo-icon">🍎</span>
            AppleLink
          </Link>

          <nav className="hp-nav">
            <Link to="/" className="hp-nav-link">Home</Link>
            <Link to="/about" className="hp-nav-link">About</Link>
            <button className="hp-cart-btn">
              🛒
              <span className="hp-cart-badge">0</span>
            </button>
          </nav>
        </div>
      </header>

      {/* ================= Hero ================= */}
      <section
        className="hp-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hp-hero-overlay" />

        <div className="hp-hero-content">
          <h1 className="hp-hero-title">
            Shop Certified Refurbished Apple Products
          </h1>
          <p className="hp-hero-subtitle">
            Save 30–50% on premium Apple technology
          </p>

          <div className="hp-hero-actions">
            <Link to="/shop" className="hp-btn hp-btn-primary">
              Shop Now
            </Link>
            <Link to="/about" className="hp-btn hp-btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="hp-section hp-categories">
        <div className="hp-container">
          <h2 className="hp-section-title">Shop by Category</h2>
          <p className="hp-section-subtitle">
            Explore our extensive collection of certified refurbished Apple products
          </p>
          
          <div className="hp-category-grid">
            {productCategories.map((category, index) => (
              <Link to={`/shop/${category.key}`} key={index} className="hp-category-card">
                <div className="hp-category-card-content">
                  <div className="hp-category-img-container">
                    <img src={category.img} alt={category.name} className="hp-category-img" />
                  </div>
                  <h3 className="hp-category-title">{category.name}</h3>
                  <p className="hp-category-description">{category.description}</p>
                  <span className="hp-category-link">Shop Now →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="hp-section hp-features">
        <div className="hp-container">
          <h2 className="hp-section-title">Why Choose AppleLink?</h2>
          <p className="hp-section-subtitle">
            We make premium Apple technology accessible with confidence and quality assurance
          </p>
          
          <div className="hp-feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="hp-feature-card">
                <div className="hp-feature-icon">{feature.icon}</div>
                <h3 className="hp-feature-title">{feature.title}</h3>
                <p className="hp-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refurbishment Process */}
      <section className="hp-section hp-process">
        <div className="hp-container">
          <h2 className="hp-section-title">Our Quality Process</h2>
          <p className="hp-section-subtitle">
            Every device undergoes our rigorous 10-point certification process
          </p>
          
          <div className="hp-process-steps">
            <div className="hp-process-step">
              <div className="hp-process-number">1</div>
              <h3 className="hp-process-title">Thorough Inspection</h3>
              <p className="hp-process-description">
                Comprehensive diagnostics and physical inspection
              </p>
            </div>
            <div className="hp-process-step">
              <div className="hp-process-number">2</div>
              <h3 className="hp-process-title">Professional Cleaning</h3>
              <p className="hp-process-description">
                Deep cleaning and sanitization using Apple-approved methods
              </p>
            </div>
            <div className="hp-process-step">
              <div className="hp-process-number">3</div>
              <h3 className="hp-process-title">Quality Replacement</h3>
              <p className="hp-process-description">
                Genuine Apple parts for any necessary replacements
              </p>
            </div>
            <div className="hp-process-step">
              <div className="hp-process-number">4</div>
              <h3 className="hp-process-title">Final Testing</h3>
              <p className="hp-process-description">
                Performance testing and quality assurance
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="hp-section hp-cta">
        <div className="hp-container">
          <div className="hp-cta-content">
            <h2 className="hp-cta-title">Ready to Join the AppleLink Family?</h2>
            <p className="hp-cta-description">
              Start saving on premium Apple products today. Join thousands of satisfied customers 
              who trust AppleLink for quality, savings, and exceptional service.
            </p>
            <div className="hp-cta-buttons">
              <Link to="/shop" className="hp-btn hp-btn-primary hp-btn-large">
                Shop All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
      <LandingFooter />
    </div>
  );
};

export default HomePage;