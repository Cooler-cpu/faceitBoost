import React, {useState} from "react";

import * as S from "./styles";

const Input = (props) => {

  const onChangeHandler = event => {
    props.onChangeHandler(event.target.value)
  }

  return (
    <S.Container>
      <S.Input
      value={props.value}
      onChange={onChangeHandler}
      type={props.type}
      />

        <S.Label
        className="labelFix"
        >
          {props.label}
        </S.Label>

    </S.Container>
  );
};

export default Input;