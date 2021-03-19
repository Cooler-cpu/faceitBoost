import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  max-width: 250px;
  position: relative;
  justify-content: center;
`;

export const Label = styled.label`
  color: rgb(219, 218, 218);
  font-size: 16px;
  display: inline-block;
  position: absolute;
  padding: 2px 5px;
  transform: translate(10px, 0);
  transition: all linear 0.12s;
  z-index: -1;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  border-radius: 4px;
  border: 2px solid rgb(89, 179, 213);
  background-color: transparent;

  &:focus + ${Label} {
    opacity: 1;
    color: rgb(89, 179, 213);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transform: translate(10px, -25px);
    background-color: #fff;
    z-index: 1;
  }
`;
