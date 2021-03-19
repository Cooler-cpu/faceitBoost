import React, {useState} from 'react';

import level1 from '../assets/img/level1.svg'
import level10 from '../assets/img/level10.svg'


import RadioTogle from './buttons/RadioTogle'
import RcSlider from './RC-Slider.js'
import Button from './buttons/PrimaryButton'


const CalculatingElo = (props) => {
    const [minElo, setMinElo] = React.useState(300);
    const [maxElo, setMaxElo] = React.useState(1000);

    let cost = (maxElo - minElo) * 0.01335;

    const handleMinEloChange = (value) => { setMinElo(value) }
    const handleMaxEloChange = (value) => { setMaxElo(value) } 

    const inputHandleMinEloChange = (event) => { handleMinEloChange(event.target.value) }
    const inputHandleMaxEloChange = (event) => { handleMaxEloChange(event.target.value) }

    const handleChangeRadio = (prop) => (event) => {
        setValues({ ...valuesRadio, [prop]: event.target.value});
        console.log(valuesRadio.LobbyBoost);
        console.log(valuesRadio.ExpressBoost);
    }

    const [valuesRadio, setValues] = React.useState({
        LobbyBoost: false,
        ExpressBoost: false,
    });

    //step change 
    const handleStepChange = () => {
        props.onHandleStepChange(2);

        //class StepChange
        props.onClassStepChange();
    }


    return(

    <div className="container-calculator">

            <div className="calculator">
                    
                <div className="calculator__elo_inputNum">

                    <div className="inputNumBox">
                        <div className="inputNumBox__title">
                            <span>Current elo</span>
                        </div>

                        <div className="inputNumBox__content">

                            <img width="60" src={level1} alt="faceit1Lvl" />
                            
                            <div className="inputNumBox__inputElo">
                                <input className="inputElo" 
                                type="number" step="1" 
                                min="1" 
                                max="3000" 
                                onChange={inputHandleMinEloChange}
                                value={minElo}/>
                            </div>

                        </div>

                    </div>
                    
                    <div className="inputNumBox">
                        <div className="inputNumBox__title">
                            <span>Desired elo</span>
                        </div>

                        <div className="inputNumBox__content">

                    
                            <div className="inputNumBox__inputElo">
                                <input className="inputElo" 
                                type="number" 
                                step="1" 
                                min="1" 
                                max="3000" 
                                onChange={inputHandleMaxEloChange}
                                value={maxElo}/>
                            </div>

                            <img width="60" src={level10} alt="faceit10Lvl" />

                        </div>

                    </div>

                </div>

                <RcSlider
                minElo={minElo} 
                maxElo={maxElo} 
                onMaxEloChange={handleMinEloChange} 
                onMinEloChange={handleMaxEloChange}
                />

                <div className="calculator__elo_radio">

                    <div className="radioBox">
                        
                        <div 
                        value={!valuesRadio.LobbyBoost}
                        onClick={handleChangeRadio('LobbyBoost')}
                        >
                            <RadioTogle/>
                        </div>

                        <div className="radioBox__title">
                            <span>Lobby boost</span>
                        </div>
                        <div className="radioBox__procent">
                            <small>+20%</small>
                        </div>
                    </div>

                    <div className="radioBox">
                        <div 
                        value={!valuesRadio.ExpressBoost}
                        onClick={handleChangeRadio('ExpressBoost')}
                        >
                            <RadioTogle/>
                        </div>

                        <div className="radioBox__title">
                            <span>Express boost</span>
                        </div>
                        <div className="radioBox__procent">
                            <small>+10%</small>
                        </div>
                    </div>

                </div>

                <div className="calculator__elo_finalPrice">
                    <div className="finalPriceBox">
                        <div className="finalPriceBox__title">
                            <h3>Final price: </h3> 
                        </div>

                        <div className="finalPriceBox__price">
                            <h3>€ {cost.toFixed(2)}</h3>
                        </div>

                    </div>
                </div>


                <div className="calculator__elo_buttonSection">
                    {/* <button className="buttonGreen" 
                    onClick={handleStepChange}

                    >
                        Authentication
                    </button> */}
                    <Button primary onClick={handleStepChange}>Authentication</Button>

                </div>

        
            </div>
    </div>
    )

}

export default CalculatingElo