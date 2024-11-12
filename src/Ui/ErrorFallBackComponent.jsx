/* eslint-disable react/prop-types */

function ErrorFallBackComponent({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-darkGray text-white">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg mb-8 text-red-400">{error.message}</p>

      <button
        onClick={resetErrorBoundary}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold"
      >
        Go back to Dashboard
      </button>
    </div>
  );
}

export default ErrorFallBackComponent;
