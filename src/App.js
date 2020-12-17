import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Cook from './components/Cook/Cook';
import Home from './components/Home';
import MainMenu from './components/MainMenu';
import Order from './components/Order/Order';
import Rule from './components/Rule';
import { OrderProvider } from './context/orderContext';

function App() {

  // const selectedOrders = orders.filter(order => order.selected = true);

  return (
    <OrderProvider>
      <Router>
        <div className="App">
          <MainMenu />
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/order' ><Order /></Route>
            <Route path='/cook' ><Cook /></Route>
            <Route path='/rule' ><Rule /></Route>
          </Switch >

        </div >
      </Router >
    </OrderProvider>
  );
}



export default App;
