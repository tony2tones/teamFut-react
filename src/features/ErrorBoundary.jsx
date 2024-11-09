import{ Component } from 'react';
import PropTypes from 'prop-types';


class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error loading component:', error, info);
  }
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong...</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
