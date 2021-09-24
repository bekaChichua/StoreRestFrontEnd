import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import User from "./routes/User"

function App() {


  return (
        <Router>
          <nav>
              <ul>
                <li>
                  <Link to="/">home</Link>
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
          {/* <Route path="/home">
            <Home />
          </Route> */}
          <Route path="/users">
            <User />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route> */}
        </Switch>
      </div>
        </Router>
  );
}

export default App;
