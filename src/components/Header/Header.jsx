import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1>Unlock Exceptional Learning Opportunities</h1>
          <p>
            Dive into our exclusive sale with courses starting from just $9.99. Whether you're looking to develop new skills or advance your career, we've got the perfect course for you. Don’t miss out—sale ends August 31!
          </p>
          <div className="cta-buttons">
            <a href="/courses" className="cta-button primary">Browse Courses</a>
            <a href="/register" className="cta-button secondary">Join Now</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
