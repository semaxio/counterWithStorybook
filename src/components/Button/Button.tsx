import styled from "styled-components";

type ButtonPropsType = {
  title: string
  disabled: boolean
  callback?: () => void
}

export const Button = ({title, disabled, callback}: ButtonPropsType) => {
  return (
      <StyledButton disabled={disabled} onClick={callback}>
        {title}
      </StyledButton>
  );
};


const StyledButton = styled.button`
    font-size: 45px;
    font-weight: bold;
    background-color: #00b8ce;
    padding: 5px 30px;
    border-radius: 10px;
    border: none;

    &:active {
        background-color: ${props => !props.disabled ? 'wheat' : 'none'};
    }
    @media (max-width: 768px) {
        font-size: 30px;
    }
`