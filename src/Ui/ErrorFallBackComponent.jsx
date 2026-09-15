/* eslint-disable react/prop-types */

function ErrorFallBackComponent({ resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-canvas text-ink">
      <h1 className="text-3xl font-bold mb-4">Let’s try that again.</h1>
      <p className="text-sm mb-8 text-muted">Something got in the way. Return home to start fresh.</p>

      <button
        onClick={resetErrorBoundary}
        className="btn btn-primary"
      >
        Back to home
      </button>
    </div>
  );
}

export default ErrorFallBackComponent;
