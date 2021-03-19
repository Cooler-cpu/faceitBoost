import React, { useState } from 'react';


const RadioTogle = () => {

    const [togle, setTogle] = useState(false); 

    const buttonHandleClick = () => {
        if(togle){

            setTogle(false);

        }else{

            setTogle(true);

        }
    }


    return(
        <div className={togle ? "radioTogle radioTogle__open" : "radioTogle"} onClick={()=>buttonHandleClick()}>
            <div className={togle ? "circleIcon circle-open": "circleIcon"}/>
        </div>
    )
}

export default RadioTogle