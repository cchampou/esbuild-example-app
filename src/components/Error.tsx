import React, { Component, ReactNode } from 'react';

interface stateTypes {
  hasError: boolean;
}

export class Error extends Component {
  state: stateTypes;

  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): stateTypes {
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <div>Error</div>;
    }
    return this.props.children;
  }
}

export default Error;
