import React, { useState } from 'react';

const Mainhome = () => {
    let [set, setMaghedu] = useState(0)

    
    let mahedu1 = () => {

        setMaghedu(set+1)


        
    }
    return (
        <div>



            <button onClick={mahedu1}>increate {set} </button>


        </div>
    );
};

export default Mainhome;