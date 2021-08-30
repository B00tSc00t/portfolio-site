import React from 'react';

const PortfolioItem = (props) => (
  <div>
  <h1>Stuff I did</h1>
    <p>This page is for theitem with the id of {props.match.params.id}</p>
  </div>
);

export default PortfolioItem;