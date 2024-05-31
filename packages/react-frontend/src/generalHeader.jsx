import React from 'react';
import "./generalHeader.css"

const generalHeader = ({position = 'center'}) => {

    return (
        <div className="header">
            <div className="logo">MidReads</div>
        </div>
    );
}

export default generalHeader;