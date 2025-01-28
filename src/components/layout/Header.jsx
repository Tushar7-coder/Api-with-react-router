import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-gray-100 shadow-md">
        <section className="bg-blue-600 text-white p-2 text-sm px-4">
          <div className="container mx-auto flex justify-between items-center">
            <p>Get Membership, 30-day return refund guarantee.</p>
            <div className="space-x-4">
              <Link to="#" className="hover:underline">SIGN IN</Link>
              <Link to="#" className="hover:underline">SIGN UP</Link>
            </div>
          </div>
        </section>
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div>
            <Link to="/" className="text-2xl font-bold text-gray-800">
              TStore
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4 md:space-x-8 text-gray-700">
              <li>
                <Link to="/home" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-blue-600">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
