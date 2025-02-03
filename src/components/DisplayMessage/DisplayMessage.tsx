import styled from "styled-components";


type DisplayMessagePropsType = {
  title: string
  error: string | null
}


export const DisplayMessage = ({title, error}: DisplayMessagePropsType) => {
  return (
      <StyledDisplayMessage error={error}>
        {title}
      </StyledDisplayMessage>
  );
};


const StyledDisplayMessage = styled.span<{error: string | null}>`
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: ${props => props.error ? 'red' : '#00b8ce'};
`