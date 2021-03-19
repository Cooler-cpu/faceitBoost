import React, {useState} from 'react';

import Input from "./input/input";
import Button from './buttons/PrimaryButton'

const Authentication = (props) => {
    
    const [email, setEmailValue] = React.useState('');
    const [pass, setPassValue] = React.useState('');

    const onChangeEmail = value => {
        setEmailValue(value);
    };

    const onChangePassword = value => {
        setPassValue(value);
    };

    return(
        <div className="container-calculator">

            <div className="calculator">

                <div className="calculator__authTitle">
                    <h1>Enter data</h1>
                </div>


                <div className="calculator__authFormBox">

                    <div className="label">
                        input your email <span>*</span>
                    </div>

                    <Input 
                    label="email"
                    onChangeHandler={onChangeEmail}
                    value={email}
                    />

                </div>

                <div className="calculator__authFormBox">

                    <div className="label">
                        input your password <span>*</span>
                    </div>

                    <Input 
                    label="password"
                    onChangeHandler={onChangePassword}
                    value={pass}
                    type="password"
                    />

                </div>

                <div className="calculator__elo_buttonSection">

                    <Button primary> registration </Button>

                </div>

            </div>
    
        </div>
    )
}


export default Authentication
