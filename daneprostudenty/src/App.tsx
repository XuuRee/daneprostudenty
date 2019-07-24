import React from 'react';
import './App.css';

const App: React.SFC = () => {
  return (
    <div className="app">
      <div className="ui container">
        <div className="nav">
          <img alt="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Alexander_dennis_logo.png/150px-Alexander_dennis_logo.png" />
          <div className="nav-right">
            <a className="active" href="https://seznam.cz">O projektu</a>
            <a className="" href="https://seznam.cz">Quis</a>
            <a className="" href="https://seznam.cz">Turpis</a>
            {/* <a className="ui positive circular button center-button" href="https://seznam.cz">Vytvorit danove priznani</a> */}
          </div>
        </div>
      </div>
      <div className="ui container">
        <h1>Lorem ipsum dolor, <br />consectetuer adipiscing elit.</h1>
      </div>
    </div>
  );
}

export default App;
