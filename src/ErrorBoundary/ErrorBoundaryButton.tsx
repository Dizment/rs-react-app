import { Component } from 'react';
import { ButtonState } from './types';
import styles from './ErrorBoundary.module.css';

export class ErrorBoundaryButton extends Component<unknown, ButtonState> {
  state = {
    isError: false,
  };

  handleClick = () => {
    this.setState({ isError: true });
  };

  render() {
    if (this.state.isError) {
      throw new Error();
    }

    return (
      <button className={styles.button} onClick={this.handleClick}>
        Trigger Error
      </button>
    );
  }
}
