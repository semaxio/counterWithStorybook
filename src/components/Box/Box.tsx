import styled from "styled-components";
import React from "react";


type BoxType = {
  children: React.ReactNode;
}

export const Box = ({children}: BoxType) => {
  return (
      <StyledBox>
        {children}
      </StyledBox>
  );
};

const StyledBox = styled.div`
    width: 500px;
    height: 400px;
    border: 5px solid #00b8ce;
    border-radius: 10px;
    padding: 35px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 40px;
    font-family: sans-serif;
    @media (max-width: 768px) {
        max-width: 340px;
        height: 290px;
        max-height: 400px;
        gap: 20px;
        padding: 5px;
    }
`

