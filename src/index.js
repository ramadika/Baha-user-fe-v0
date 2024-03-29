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
import Login from 'components/Login-Page'
import CreateAccount from 'components/CreateAccount-Page'
import Home from 'components/Home-Page'
import About from 'components/About-Page'
import Contact from 'components/Contact-Page'
import Shop from 'components/Shop-Page'
import Men from 'components/Shop-Page/Men'
import Women from 'components/Shop-Page/Women'
import Accessories from 'components/Shop-Page/Accessories'
import Sale from 'components/Sale-Page'
import NewArrival from 'components/NewArrival-Page'
import Custom from 'components/Custom-Page'
import SelectedProduct from 'components/Shop-Page/ProductSelected'
import Cart from 'components/Cart-Page'
import CheckOut from 'components/Checkout-Page'
import Confirmation from 'components/Confirmation-Page'
import Shipping from 'components/Checkout-Page/Shipping'
import Confirmed from 'components/Confirmation-Page/Confirmed'
import Placed from 'components/Checkout-Page/PlaceOrder'

ReactDOM.render(
  <Router>
    <Switch>
      <DataProvider>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/createAccount" component={CreateAccount}/>
        <Route path="/cart" component={Cart} />
        <Route path="/checkOut" component={CheckOut} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/newArrival" component={NewArrival} />
        <Route path="/customYou" component={Custom} />
        <Route path="/selectProduct/:id" component={SelectedProduct} />
        <Route path="/confirmation" component={Confirmation} />
        <Route path="/shop" component={Shop} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Route path="/accessories" component={Accessories} />
        <Route path="/sale" component={Sale} />
        <Route path="/shipping" component={Shipping}/>
        <Route path="/confirmed" component={Confirmed}/>
        <Route path="/placed" component={Placed}/>
      </DataProvider>
    </Switch>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
