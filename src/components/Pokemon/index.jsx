import React from "react";
import styles from "./styles.module.css";

export const Pokemon = ({ name = "pokemon", tipo = "tipo"}) => {
    return (
    <div>
        <h2 className={styles.name}>{name}</h2>
        {/* <h3>Tipo do pokemon: {tipo}</h3> */}
    </div>);
  };