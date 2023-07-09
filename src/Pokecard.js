import React from 'react';

function Pokecard(props) {
  return (
    <div className="Pokecard">
      <h3>{props.name}</h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={props.name}/>
      <p>Type: {props.type}</p>
      <p>EXP: {props.base_experience}</p>
    </div>
  );
}

export default Pokecard;
