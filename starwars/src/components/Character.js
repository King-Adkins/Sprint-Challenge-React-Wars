import React from 'react';
import './StarWars.css';

const Character = (props) => {
    return (
        <div className = 'MainCharacter'>
            <div className = 'MainName'>
            <h1>
                {props.character.name}
            </h1>
            </div>
            <div className = 'StatYear'>
            <p>
                Birth Year: {props.character.birth_year} 
            </p>
            </div>
            <div className = 'StatColor'>
            <p>
                Eye Color: {props.character.eye_color}
            </p>
            </div>
            <div className = 'StatGender'>
            <p>
                Gender: {props.character.gender}
            </p>
            </div>
            <div className = 'StatMass'>
            <p>
                Mass: {props.character.mass}
            </p>
            </div>
        </div>
    );
};

export default Character;