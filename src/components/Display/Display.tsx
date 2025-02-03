import styled from "styled-components";
import React from "react";

type DisplayType = {
  children: React.ReactNode
}

export const Display = ({children}: DisplayType) => {
  return (
      <StyledDisplay>
        {children}
      </StyledDisplay>
  );
};


const StyledDisplay = styled.div`
    width: 450px;
    height: 200px;
    border: 5px solid #00b8ce;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    @media (max-width: 768px) {
        max-width: 300px;
    }
`