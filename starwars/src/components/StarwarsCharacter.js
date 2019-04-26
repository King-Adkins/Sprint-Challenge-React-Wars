import React from 'react';

const StarwarsCharacter = (props) => {
    return (
        <div className = 'MainCharacter'>
            <h1 className = 'MainName'>
                {props.characterData.name}
            </h1>
            <p className = 'Stat'>
                Birth Year: {props.characterData.birth_year} 
            </p>
            <p className = 'Stat'>
                Eye Color: {props.characterData.eye_color}
            </p>
            <p className = 'Stat'>
                Gender: {props.characterData.gender}
            </p>
            <p className = 'Stat'>
                Mass: {props.characterData.mass}
            </p>
        </div>
    );
};

export default StarwarsCharacter;