import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <ul className="flex">
          <li className="mr-6">
            <Link to="/about" className="hover:text-gray-300">About</Link>
          </li>
          <li className="mr-6">
            <Link to="/resume" className="hover:text-gray-300">Resume</Link>
          </li>
          <li className="mr-6">
            <Link to="/work" className="hover:text-gray-300">Work</Link>
          </li>
          <li className="mr-6">
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </li>
          <li className="mr-6">
            <Link to="/experiences" className="hover:text-gray-300">Experiences</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
