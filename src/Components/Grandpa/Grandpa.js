import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import "./Grandpa.css"

const Grandpa = () => {
    const [house,setHouse]=useState(1);

const ornament="Daimond Ring";

    const handleBuyAHouse=()=>{
        const newHouseCount=house+1;
        setHouse(newHouseCount)
    }
    return (
        <div className='grandpa'>
            <h4>Grand Pa <button onClick={handleBuyAHouse}>Buy A House</button></h4>
            
            <p>House: {house}</p>
            <section style={{display:'flex'}}>
            <Father house={house} ornament={ornament}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;