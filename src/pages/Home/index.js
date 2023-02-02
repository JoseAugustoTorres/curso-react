import React from "react";
import { Pokemon } from "../../components/Pokemon/index.jsx";
import styles from "./styles.module.css";
import PokemonLogo from "../../assets/imgs/pokemon-logo.png";

export const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.imagem} alt="Logo pokemon" src={PokemonLogo} />
      <Pokemon name="Pikachu" tipo="Elétrico" />
      <Pokemon name="Charizard" tipo="Fogo" />
      <Pokemon name="Squirtle" tipo="Água" />
      <Pokemon name="Bulbassauro" tipo="Planta" />
      <Pokemon name="Charmander" tipo="Fogo" />
      <Pokemon />
    </div>
  );
};
