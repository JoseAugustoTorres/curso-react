import React from "react";
import { Pokemon } from "../components/Pokemon";

export const Home = () => {
  return (
    <div>
      <h1>Meu site de Pokemon</h1>
      <Pokemon name="Pikachu" tipo="Elétrico" />
      <Pokemon name="Charizard" tipo="Fogo" />
      <Pokemon name="Squirtle" tipo="Água" />
      <Pokemon name="Bulbassauro" tipo="Planta" />
      <Pokemon name="Charmander" tipo="Fogo" />
      <Pokemon />
    </div>
  );
};
