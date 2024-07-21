// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import P2Confirmation from './Components/p2_confirmation';
import P2Faq from './Components/p2_faq';
import P2Portfolio from './Components/p2_portfolio';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/confirmation">Confirmation</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/faq">
            <P2Faq />
          </Route>
          <Route path="/portfolio">
            <P2Portfolio />
          </Route>
          <Route path="/confirmation">
            <P2Confirmation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
