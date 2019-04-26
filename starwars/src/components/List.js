import React from 'react';
import './StarWars.css';
import  Character from './Character';


function List (props) {
    
    return (
        <div>
            {props.characters.map(character => (
                <Character character = {character} key = {character.created} />
            ))}
        </div>
    );
};

export default List;