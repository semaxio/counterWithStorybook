import {ChangeEvent} from "react";
import styled from "styled-components";

type InputType = {
  value: number
  error: string | null
  callback: (value: number) => void
}


export const Input = ({value, error, callback}: InputType) => {


  return (
      <StyledInput
          value={value}
          type={'number'}
          // min={0}
          error={error}
          onChange={(e: ChangeEvent<HTMLInputElement>)=> {callback(+e.currentTarget.value)}}
      />
  );
};


const StyledInput = styled.input<{ error: string | null }>`
    width: 150px;
    height: 45px;
    font-size: 26px;
    font-weight: bold;
    padding-left: 15px;
    text-align: center;
    

    background-color: ${props => props.error ? '#ff9393' : '#eafafc'};
    border: ${props =>`2px solid ${props.error ? '#ff0000' : '#00b8ce'} `};
    border-radius: 4px;

    @media (max-width: 768px) {
        & {
            max-width: 150px;
            width: 40%;
        }
    }
`
