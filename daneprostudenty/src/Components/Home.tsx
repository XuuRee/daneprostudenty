import React from 'react';
import illustration_url from "../Images/schoolbooks-colour.png";

const Home: React.SFC = () => {
  return (
    <div className="ui grid">
      <div className="ui seven wide column grid pad-1">
        <img src={illustration_url} style={{ float: "right", margin: "2.5em" }} width="350px" height="350px" alt="Úvodní obrázek" />
      </div>
      <div className="ui nine wide column grid pad-1">
        <div style={{ margin: "2.5em" }}>
          <div className="font-1">Vítej studente!</div>
          <br />
          <h1>Potřebuješ pomoc s vyplněním daňového přiznání?</h1>
          <br />
          <button className="big ui button">Jak na to?</button>
          <button className="big ui positive button">Vyplnit daňové přiznání</button>
          {/*
          <div className="ui buttons">
            <button className="huge ui button">Jak na to?</button>
            <div className="or"></div>
            <button className="huge ui positive button">Save</button>
          </div>
          */}
          {/* 
          <button className="positive huge ui button">Vyplnit daňové přiznání</button>
          */}
        </div>
      </div>
    </div>
  );
}

export default Home;