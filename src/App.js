import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Courses from './components/Courses';
import logo from './logo.svg';

import './App.css';
import { apolloApi } from "./config/endpoints";

const client = new ApolloClient({
    uri: apolloApi
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">React and GraphQL - Sample Application</a>
      </nav>
      <div>
        <Courses />
      </div>
    </div>
  </ApolloProvider>
);
export default App;
