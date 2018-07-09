import React from 'react';
import CharacterCard from './CharacterCard';

//Initiative List mapping all characters passed in
const InitiativeList = (props) => {
    return (
        <div className="initList row">
            <div className="col-1">
                <i className="fa fa-arrow-circle-left fa-2x col btn" aria-hidden="true"></i>
            </div>
            <div className="col-10 row">
                {props.chars.map(char => <CharacterCard key={char.order} {...char} />)}
            </div>
            <div className="col-1">
                <i className="fa fa-arrow-circle-right fa-2x col btn" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default InitiativeList;