import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Offers } from './components/Offers';
import { Counter } from './components/Counter';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/index.html' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/offers' component={Offers} />
      </Layout>
    );
  }
}
