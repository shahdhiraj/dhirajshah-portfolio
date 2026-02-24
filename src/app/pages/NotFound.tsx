import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-6 text-center">
      <h1 className="text-6xl font-bold text-neutral-900 mb-4">404</h1>
      <p className="text-xl text-neutral-600 mb-8">Page not found.</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
