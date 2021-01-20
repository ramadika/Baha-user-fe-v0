// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { DataProvider } from 'components/context'

// internals
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

// Pages
import BaseLayout from 'components/Base-Layout'
import Login from 'components/Login-Page'
import CreateAccount from 'components/CreateAccount-Page'
import Home from 'components/Home-Page'
import About from 'components/About-Page'
import Contact from 'components/Contact-Page'
import Shop from 'components/Shop-Page'
import Sale from 'components/Sale-Page'
import NewArrival from 'components/NewArrival-Page'
import Custom from 'components/Custom-Page'
import SelectedProduct from 'components/Shop-Page/ProductSelected'
import Cart from 'components/Cart-Page'
import CheckOut from 'components/Checkout-Page'
import Confirmation from 'components/Confirmation-Page'

ReactDOM.render(
  <Router>
    <Switch>
      <DataProvider>
        <Route exact path="/" component={Login}/>
        <Route path="/createAccount" component={CreateAccount}/>
        <BaseLayout>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop" component={Shop} />
          <Route path="/sale" component={Sale} />
          <Route path="/newArrival" component={NewArrival} />
          <Route path="/customYou" component={Custom} />
          <Route path="/selectProduct/:id" component={SelectedProduct} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkOut" component={CheckOut} />
          <Route path="/confirmation" component={Confirmation} />
        </BaseLayout>
      </DataProvider>
    </Switch>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
