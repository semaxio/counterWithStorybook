import {Button} from '../Button/Button.tsx';
import styled from "styled-components";

type ButtonsType = {
  valueError?: string | null
  generalError: string | null
  settingsMode?: string | null
  settings: boolean
  increment?: () => void
  resetCount?: () => void
  setSettingsValues?: () => void
}
export const Controls =
    ({
       valueError,
       generalError,
       settingsMode,
       settings,
       increment,
       resetCount,
       setSettingsValues
     }: ButtonsType) => {

      return (
          <StyledControls>
            {
              settings
                  ? <Button callback={setSettingsValues} title={'set'} disabled={!!generalError || !settingsMode}/>
                  : <>
                    <Button callback={increment} title={'inc'} disabled={!!valueError || !!generalError || !!settingsMode}/>
                    <Button callback={resetCount} title={'reset'} disabled={!!generalError || !!settingsMode}/>
                  </>
            }
          </StyledControls>
      )
    }
;


const StyledControls = styled.div`
    width: 450px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 5px solid #00b8ce;
    border-radius: 10px;
    padding: 25px 0;
    @media (max-width: 768px) {
        max-width: 300px;
    }
`