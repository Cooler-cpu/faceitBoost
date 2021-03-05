import React, { useState } from 'react';


const RadioTogle = () => {

    const [togle, setTogle] = useState(false); 

    // const buttonHandleClick = () => {
        
    // }

    return(
        <div className="radioTogle" onClick={()=>setTogle(true)}>
            <div className={togle ? "circleIcon": null}/>
        </div>
    )
}

export default RadioTogle