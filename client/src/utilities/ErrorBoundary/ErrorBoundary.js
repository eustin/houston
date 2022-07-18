import React from "react";
import PropTypes from "prop-types";
import ErrorBoundaryFallbackUi from "./ErrorBoundaryFallbackUi";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null, hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.

    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // TODO: log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      console.log({
        ERROR: this.state.error,
        ERROR_INFO: this.state.errorInfo,
      });

      // You can render any custom fallback UI
      return <ErrorBoundaryFallbackUi />;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
