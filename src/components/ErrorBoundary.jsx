import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const myErrorHandler = (error, { componentStack }) => {
  console.log(error);
  console.log(componentStack);
};

const ErrorBoundaryComponent = ({ children }) => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
    onError={myErrorHandler}
  >
    {children}
  </ErrorBoundary>
);

export default ErrorBoundaryComponent;
