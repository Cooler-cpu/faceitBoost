import React, {useState} from 'react';

const CalculatingAside = (props) => {

    let CurrStep1 = props.currStep1;
    let CurrStep2 = props.currStep2;
    let CurrStep3 = props.currStep3;

    return(
        <aside className="calculatorFaceit__aside">

                   <div className="stepBox">

                        {/* .currStepRow добавить стрелку для шага */}
                        <div className={ 
                            CurrStep1 ? 
                                "stepBox__stepNum currStep currStepRow" 
                                : "stepBox__stepNum"}
                            >
                            <div className="stepNumber">
                                <h1>1</h1>
                            </div>

                            <div className="stepContent">
                                    <div className={
                                    CurrStep1 ? 
                                        "stepContent__title currStep"
                                        : "stepContent__title"}
                                    >
                                        Step
                                    </div>
                                    <div className="stepContent__action">
                                        Calculation
                                    </div>
                            </div>

                        </div>

                        <div className={ 
                            CurrStep2 ? 
                                "stepBox__stepNum currStep" 
                                : "stepBox__stepNum"}
                            >
                            <div className="stepNumber">
                                <h1>2</h1>
                            </div>

                            <div className="stepContent">
                                    <div className={
                                    CurrStep2 ? 
                                        "stepContent__title currStep"
                                        : "stepContent__title"}
                                    >
                                         Step
                                    </div>
                                    <div className="stepContent__action">
                                        Authentication
                                    </div>

                            </div>
                        </div>

                        <div className={ 
                            CurrStep3 ? 
                            "stepBox__stepNum currStep" 
                            : "stepBox__stepNum"}
                        >

                            <div className="stepNumber">
                                <h1>3</h1>
                            </div>

                            <div className="stepContent">
                                    <div className={
                                    CurrStep3 ? 
                                        "stepContent__title currStep"
                                        : "stepContent__title"}
                                    >
                                         Step
                                    </div>
                                    <div className="stepContent__action">
                                        Payment
                                    </div>

                            </div>
                        </div>

                   </div>

                </aside>
    )
}

export default CalculatingAside