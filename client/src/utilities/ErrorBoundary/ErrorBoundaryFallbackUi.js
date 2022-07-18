import React from "react";

const ErrorBoundaryFallbackUi = () => {
  const onResetButtonClick = () => {
    window.location.href = window.location.origin;
  };

  return (
    <div
      role="alert"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* <Alert severity="error">
        Oops! Something went wrong. We will look into the issue and fix it asap.
      </Alert> */}
      <div>
        <h1 className="mb-4">Something went wrong</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          type="button"
          onClick={onResetButtonClick}
        >
          Go to a safe place
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundaryFallbackUi;
