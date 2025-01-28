import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Store
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Discover the best products at unbeatable prices. Your satisfaction is our priority.
          </p>
          <Link
            to="/product"
            className="bg-white text-blue-600 px-6 py-3 text-lg font-medium rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Explore Products
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Quality Products</h3>
              <p className="text-gray-600">
                We offer only the best quality products, carefully curated to meet your needs.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Affordable Prices</h3>
              <p className="text-gray-600">
                Enjoy competitive prices without compromising on quality.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Exceptional Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is here to assist you 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Ready to Start Shopping?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Browse our wide range of products and find what you're looking for today!
          </p>
          <Link
            to="/product"
            className="bg-blue-600 text-white px-6 py-3 text-lg font-medium rounded-lg shadow-md hover:bg-blue-500 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
