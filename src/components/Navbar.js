import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <p>Math magicians</p>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/calculator">calculator</Link>
      <Link to="/quotes">Quotes</Link>
    </div>
  </nav>
);

export default Navbar;
