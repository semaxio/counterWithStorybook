import styled from "styled-components";
import {Input} from "../Input/Input.tsx";

type SettingsPropsType = {
  maxValue: number
  startValue: number
  maxValueError: string | null
  startValueError: string | null
  startValueHandler: (value: number) => void
  maxValueHandler: (value: number) => void
}

export const Settings = (
    {
      maxValue,
      startValue,
      maxValueError,
      startValueError,
      startValueHandler,
      maxValueHandler,
    }: SettingsPropsType
) => {
  return (
      <StyledSettings>
        <div>
          <span>max value:</span>
          <Input
              value={maxValue}
              error={maxValueError}
              callback={maxValueHandler}/>
        </div>

        <div>
          <span>start value:</span>
          <Input
              value={startValue}
              error={startValueError}
              callback={startValueHandler}/>
        </div>
      </StyledSettings>
  );
};


const StyledSettings = styled.div`

    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    & div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & span {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 32px;
        color: #00b8ce;
    }


    @media (max-width: 768px) {
        & {
            max-width: 300px;
            width: 90%;
        }
        & span {
            font-size: 24px;
        }
    }
`