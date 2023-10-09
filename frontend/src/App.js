// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FileUpload from './components/FileUpload';
import PlantSearch from './components/PlantSearch';
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Plant Identification and Search</h1>
        </header>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <Link to="/identification" className="nav-button">
                Plant Identification
              </Link>
            </li>
            <br />
            <br />
            <br />
            <li>
              <Link to="/search" className="nav-button">
                Plant Search
              </Link>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <Switch>
            <Route path="/identification">
              <FileUpload />
            </Route>
            <Route path="/search">
              <PlantSearch />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
