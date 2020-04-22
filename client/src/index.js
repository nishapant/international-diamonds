import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './style/Navbar.css';



const Root = () =>  (
  <Router>
      <React.Fragment>
          <Navbar />
          <Switch>
              <Route component={App} exact path="/" />
              {/* <Route component={Checkout} path="/checkout" />
              <Route component={Contact} path="/contact" /> 
               <Route component={Brews} path="/:brandId" /> */}
          </Switch>
      </React.Fragment>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
