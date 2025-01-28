import { useNavigate, useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () =>{
	navigate(-1);
  }
  if (error.status === 404) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="text-center space-y-6">
          {/* Error Image */}
          <figure>
            <img
              src="https://i.pinimg.com/originals/46/ce/12/46ce1235c5697ce170c6e84f4b4fb4e7.gif"
              alt="404 Not Found"
              className="w-80 mx-auto rounded-lg shadow-lg"
            />
          </figure>

          {/* Error Text */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Oops! Page Not Found
            </h1>
            <p className="text-gray-600 mt-2">
              The page you are looking for does not exist.
            </p>
            <p className="text-gray-600">
              You can go back to the previous page or explore the homepage.
            </p>
          </div>

          {/* Back to Home Button */}
          <Link
            to="/home"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Go Back to Homepage
          </Link>
		  <button onClick={handleGoBack}  className=" bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mx-2">Go back</button>
        </div>
      </section>
    );
  }

  return null;
};

export default ErrorPage;
