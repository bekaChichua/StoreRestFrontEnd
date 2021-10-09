import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import User from "./routes/User"
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Home from './routes/Home';

function App() {


  return (
        <Router>
          <nav>
              <ul>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
                <li>
                  <Link to="/signup">signup</Link>
                </li>
                <li>
                  <Link to="/users">user</Link>
                </li>
              </ul>
            </nav>
          <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/users">
            <User />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
        </Router>
  );
}

export default App;
