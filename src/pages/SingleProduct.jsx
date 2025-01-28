import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleProduct = () => {
  const [product, setProduct] = useState(null); // Changed to null since product will be an object
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state
  const { id } = useParams();
  const api = `https://dummyjson.com/products/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setProduct(response.data);
        setLoading(false); // Set loading to false after successful fetch
      } catch (error) {
        setError("Failed to load product details");
        setLoading(false); // Ensure loading stops on error
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading product details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!product) {
    return <p className="text-center text-gray-500">Product not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>
        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-green-600 mb-4">
            Price: ${product.price}
          </p>
          <p className="text-gray-500 mb-4">Category: {product.category}</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
