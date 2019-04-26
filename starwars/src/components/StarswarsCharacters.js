import React from 'react';
import StarwarsCharacter from './StarwarsCharacter'

const StarwarsCharacters = (props) => {
    let characterData = [props.data];
    return (
        <div>
            {characterData.map}
            <StarwarsCharacter />
        </div>
    );
};

export default StarwarsCharacters;