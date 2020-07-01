import React from 'react';

import './styles.css';

const CardApp = () => {
  return (
    <div className="row">
      <div className="card card-primary col-12 col-md-3">
        <label>Casos recuperados</label>
        <h1 className="ml-auto">790.040</h1>
      </div>
      <div className="card card-secondary col-12 col-md-3">
        <label>Casos confirmados</label>
        <h1 className="ml-auto">790.040</h1>
      </div>
      <div className="card card-danger col-12 col-md-3">
        <label>Óbitos confirmados</label>
        <h1 className="ml-auto">790.040</h1>
      </div>
    </div>
  );
}

export default CardApp;
