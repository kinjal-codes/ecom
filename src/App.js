import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Layout from "./components/Layout";
import OrderComplete from "./components/OrderComplete";
class App extends Component {
  render() {
    return (
      <Layout>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/ordercomplete" exact component={OrderComplete} />
      </Router>
      
      </Layout>
    );
  }
}

export default App;
