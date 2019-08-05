import React from 'react'

const Tutorial: React.SFC = () => {
  return (
      <React.Fragment>
        <div className="row">
            <h1>1. Vyplň formulář</h1>
            <div className="row">
                <h4>Všechna data, která u nás vyplníš si nikde neukládáme ani nezalohujeme.</h4>
            </div>
        </div>
        <br />
        <div className="row">
            <h1>2. Stáhni si vygenerovaný soubor</h1>
            <div className="row">
                <h4>Jedná se o speciální format dat, pomocí kterého dokážeme tvé údaje předat oficiální aplikaci ministerstva financí.</h4>
            </div>
        </div>
        <br />
        <div className="row">
            <h1>3. Využij aplikaci ministerstva financí</h1>
        </div>
        <br />
        <div className="row">
            <h1>4. Zkontroluj si své údaje</h1>
        </div>
    </React.Fragment>
  );
}

export default Tutorial;