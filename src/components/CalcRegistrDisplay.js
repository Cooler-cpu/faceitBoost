import React, {useState} from 'react';


import Input from "./input/input";
import Button from './buttons/PrimaryButton'



const CalcRegistrationDisplay = (props) => {

    const [email, setEmailValue] = React.useState('');
    const [pass, setPassValue] = React.useState('');
    const [name, setNameValue] = React.useState('');

    const onChangeEmail = value => {
        setEmailValue(value);
    };

    const onChangePassword = value => {
        setPassValue(value);
    };

    const onChangeName = value => {
        setPassValue(value);
    };

    const registerButtonHandler = props => {
        console.log(email);
        console.log(pass);
    }

    return(
    <div className="container-calculator">

        <div className="calculator">

            <div className="calculator__authTitle">
                <h1>Registration</h1>
            </div>
        

            <div className="calculator__authFormBox">

                <div className="label">
                    input your email <span>*</span>
                </div>

                <Input 
                label="email"
                onChangeHandler={onChangeEmail}
                //value={email}
                />

            </div>

            <div className="calculator__authFormBox">

                    <div className="label">
                        input your password <span>*</span>
                    </div>

                    <Input 
                    label="password"
                    onChangeHandler={onChangePassword}
                   // value={pass}
                    type="password"
                    />

            </div>

            <div className="calculator__authFormBox">

                    <div className="label">
                        input your Name <span>*</span>
                    </div>

                    <Input 
                    label="name"
                    onChangeHandler={onChangeName}
                   // value={name}

                    />

            </div>

            <div className="calculator__elo_buttonSection">

                    <Button primary onClick={registerButtonHandler}> 
                        registration 
                    </Button>

            </div>


        </div>
    </div>
    )
}

export default CalcRegistrationDisplay