import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const api = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(api);
        setProducts(response.data.products);
        setLoading(false); // Set loading to false after fetching
      } catch (error) {
        setError("Failed to fetch products");
        setLoading(false); // Ensure loading stops on error
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-4">
      {products.map((item) => (
        <div key={item.id} className="border rounded-lg shadow-lg overflow-hidden">
          <Link to={`/singleProduct/${item.id}`}>
            <img
              src={item.images[0]}
              alt={`${item.title} image`}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description.substring(0, 50)}...</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
