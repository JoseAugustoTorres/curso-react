import React from "react";

export const Pokemon = ({ name = "pokemon", tipo = "tipo"}) => {
    return (
    <div>
        <h2 >Nome do Pokemon: {name}.</h2>
        <h3>Tipo do pokemon: {tipo}</h3>
    </div>);
  };