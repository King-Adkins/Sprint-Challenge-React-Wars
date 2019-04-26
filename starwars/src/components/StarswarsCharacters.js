import React from 'react';
import StarwarsCharacter from './StarwarsCharacter'

const StarwarsCharacters = (props) => {
    let characterData = [props.data];
    return (
        <div>
            {props.data.map(item => 
            <StarwarsCharacter characterData = {item} />
            )};
        </div>
    );
};

export default StarwarsCharacters;