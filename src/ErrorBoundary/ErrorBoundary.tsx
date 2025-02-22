import { ERROR_MESSAGES } from '@/shared';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';
import { Component } from 'react';
import type { ErrorInfo } from 'react-dom/client';
import styles from './ErrorBoundary.module.css';

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(ERROR_MESSAGES.ERROR_BOUNDARY_CAUGHT, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorBoundary} key="error-boundary">
          <h1>{ERROR_MESSAGES.OOOPS}</h1>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
