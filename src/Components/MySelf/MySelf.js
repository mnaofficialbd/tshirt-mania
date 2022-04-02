import React from 'react';
import './MySelf.css'
import Special from '../Special/Special';

const MySelf = ({house,ornament}) => {
    return (
        <div>
            <h3>MySelf</h3>
            <p>House: {house}</p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;