import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;
  url = "/login";

  render () {
    return (
      <div>
            <h1>Homepage</h1>
            <a href={this.url}>
                <h3>Login</h3>
            </a>
      </div>
    );
  }
}
