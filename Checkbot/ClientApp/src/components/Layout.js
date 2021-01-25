import React, { Component } from 'react';
import { Container } from '@material-ui/core';

export class Layout extends Component {

  static displayName = Layout.name;

  render() {
    return (
      <div className="parent">
        <Container className="p0" maxWidth="100%">
          {this.props.children}
        </Container>
      </div>
    );
  }
}