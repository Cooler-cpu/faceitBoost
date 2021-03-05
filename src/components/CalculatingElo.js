import React from 'react';


import level1 from '../assets/img/level1.svg';
import level10 from '../assets/img/level10.svg';

import RadioTogle from '../components/buttons/RadioTogle'


const CalculatingElo = () => {
    return(

        <section className="calculatorFaceit">
            <div className="container">
                <div className="calculator">
                        
                    <div className="calculator__elo_inputNum">

                        <div className="inputNumBox">
                            <div className="inputNumBox__title">
                                <span>Начальное elo</span>
                            </div>

                            <div className="inputNumBox__content">

                                <img width="80" src={level1} alt="faceit1Lvl" />
                                
                                <div className="inputNumBox__inputElo">
                                    <input type="number" step="1" min="1" max="3000"/>
                                </div>

                            </div>

                        </div>
                        
                        <div className="inputNumBox">
                            <div className="inputNumBox__title">
                                <span>Желаемое elo</span>
                            </div>

                            <div className="inputNumBox__content">

                           
                                
                                <div className="inputNumBox__inputElo">
                                     <input type="number" step="1" min="1" max="3000"/>
                                </div>

                                <img width="80" src={level10} alt="faceit10Lvl" />

                            </div>

                        </div>

                    </div>


                    <div className="calculator__elo_inputBarBox">

                  
                        <span>+2345</span>

                        <div className="progressEloBar">

                            <progress max="100" value="25">
                                Загружено на <span id="value">25</span>
                            </progress>

                        </div>
                    </div>

                <RadioTogle/>
            
                </div>
            </div>
        </section>
   
    )
}

export default CalculatingElo;