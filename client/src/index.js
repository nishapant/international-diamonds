import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Items from './components/Items'
import './style/Navbar.css';
import { Layout } from 'antd';
import Foot from './components/Foot';
import Item from './components/Item';
import Checkout from './components/Checkout'
import Error404 from './components/Error404'
import About from './components/About'



const Root = () =>  (
  <Router>
      <React.Fragment>
          <Navbar />
          <Layout>
            <Switch>
                <Route component={App} exact path="/" />
                <Route component={Checkout} path="/checkout" />  
                <Route component={About} path="/about" />  
                <Route component={Error404} exact path="/404" />
                <Route component={Items} path="/:category-:subcategory" />
                <Route component={Item} path="/:itemId" />

                {/* <Route path="*" component={NotFoundPage} /> */}

            </Switch>
            <Foot />
          </Layout>
      </React.Fragment>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
