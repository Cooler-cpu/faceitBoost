import React, {useState} from "react";

import * as S from "./styles";

const Input = (props) => {

  let isRequired;

  const [isReq, setReq] = React.useState(false);

  const onChangeHandler = event => {
    console.log("is req", isReq );
    props.onChangeHandler(event.target.value);
    isRequired = event.target.value;
    console.log("is req", isReq );
    console.log("is required", isRequired );
    if(isRequired !== ""){
      setReq(true);
    }else{
      setReq(false);
    }
  }

  return (
    <S.Container>
      <S.Input
      value={props.value}
      onChange={onChangeHandler}
      type={props.type}
      />

        <S.Label
        className={isReq ? "labelFix" : ""}
        >
          {props.label}
        </S.Label>

    </S.Container>
  );
};

export default Input;