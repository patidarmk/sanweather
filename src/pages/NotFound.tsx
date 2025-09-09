import { useRouterState, Link } from "@tanstack/react-router";
import { useEffect } from "react";

const NotFound = () => {
  const { location } = useRouterState();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center h-[60vh]">
        <h1 className="text-9xl font-bold text-blue-500">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Attempted path: <code>{location.pathname}</code>
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Return to Home
        </Link>
    </div>
  );
};

export default NotFound;