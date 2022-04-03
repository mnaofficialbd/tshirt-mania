import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';
import "./Special.css"

const Special = ({ornament}) => {
    const ring=useContext(RingContext);
    return (
        <div>
            <h5>Special</h5>
            <p>Gift: {ring}</p>
        </div>
    );
};

export default Special;