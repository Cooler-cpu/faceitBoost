import React  from 'react'

//components
import CalculatingAside from './CalculatingAside'
import CalculatingElo from './CalculatingElo'
import Authentication from './Authentication'

//registration display for step 2
import CalcRegistrationDisplay from './CalcRegistrDisplay'


const Calculator = () => {
    const [step, setStep] = React.useState(1);
    const [ClassStep1, ClassStep1Set] = React.useState(1);
    const [ClassStep2, ClassStep2Set] = React.useState(0);
    const [ClassStep3, ClassStep3Set] = React.useState(0);


    const handleStepChange = (value) => { setStep(value) }

    const classStep1 = () => { 
        ClassStep3Set(0);
        ClassStep2Set(0);
        ClassStep1Set(1);
    }
    const classStep2 = () => {
        ClassStep3Set(0);
        ClassStep2Set(1);
        ClassStep1Set(0);
    }
    const classStep3 = () => {
        ClassStep3Set(1);
        ClassStep2Set(0);
        ClassStep1Set(0);
    }


    let CurrComponent;

    if(step === 1){
        CurrComponent = <CalculatingElo
         onHandleStepChange={handleStepChange}
         onClassStepChange={classStep2}
         />
    }
    if(step === 2){
        CurrComponent = <Authentication
        onHandleStepChange={handleStepChange}
        />
    }

    if(step === 4){
        CurrComponent = <CalcRegistrationDisplay/>
    }


    return(
        <div className="container">
            <section className="calculatorFaceit">

                <CalculatingAside 
                currStep1={ClassStep1}
                currStep2={ClassStep2}
                currStep3={ClassStep3}
                />
                
                {CurrComponent}
                
            </section>
    
        </div>
    )
}

export default Calculator;