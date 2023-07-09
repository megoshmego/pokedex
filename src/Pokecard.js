import React from 'react';
import './Pokecard.css'; // Imports the styling 
function Pokecard(props) {
  return (
    <div className={`Pokecard ${props.type}`}>
      <div className="Pokecard-inner">
        <h3>{props.name}</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={props.name}/>
        <p>Type: {props.type}</p>
        <p>EXP: {props.base_experience}</p>
      </div>
    </div>
  );
}


export default Pokecard;

// {} brackets embed JS expressions in JS, used in the above componenet to access properties passed to the pokecard component. 
//display pokemon's name w/ h3 heading w/ <h3>{props.name}
//exports imge and type

//the src attribute is a template string that injects the pokemon id into the URL

//alt attribute describes image if it cant be displayed 