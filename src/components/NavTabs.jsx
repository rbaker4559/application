import { Link, useLocation } from 'react-router-dom';
import { FaSkull } from 'react-icons/fa';

function NavTabs() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <a className="navbar-brand" href="/">
        Reggie Baker <FaSkull />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={pathname === '/' ? 'nav-link active' : 'nav-link'}
              aria-current={pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={pathname === '/about' ? 'nav-link active' : 'nav-link'}
              aria-current={pathname === '/about' ? 'page' : undefined}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={pathname === '/portfolio' ? 'nav-link active' : 'nav-link'}
              aria-current={pathname === '/portfolio' ? 'page' : undefined}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={pathname === '/contact' ? 'nav-link active' : 'nav-link'}
              aria-current={pathname === '/contact' ? 'page' : undefined}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={pathname === '/resume' ? 'nav-link active' : 'nav-link'}
              aria-current={pathname === '/resume' ? 'page' : undefined}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
