import './App.css';
import {Box} from "./components/Box/Box.tsx";
import {Display} from "./components/Display/Display.tsx";
import {Settings} from "./components/Settings/Settings.tsx";
import {Controls} from "./components/Controls/Controls.tsx";
import {Count} from "./components/Count/Count.tsx";
import {useEffect, useState} from "react";


function App() {

  const [count, setCount] = useState<number>(0);
  const [startValue, setStartValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(5);
  const [settingsMode, setSettingsMode] = useState<string | null>(null);
  const [valueError, setValueError] = useState<string | null>(null);
  const [startValueError, setStartValueError] = useState<string | null>(null);
  const [maxValueError, setMaxValueError] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  useEffect(() => {
    const localStorageValue: string | null = localStorage.getItem('countValue');
    setCount(localStorageValue !== null ? +localStorageValue : 0);
    const localStorageStartValue: string | null = localStorage.getItem('startValue');
    setStartValue(localStorageStartValue !== null ? +localStorageStartValue : 0);
    const localStorageMaxValue: string | null = localStorage.getItem('maxValue');
    setMaxValue(localStorageMaxValue !== null ? +localStorageMaxValue : 5);
  }, []);

  useEffect(() => {
    if (count === maxValue && !settingsMode) setValueError('have max value')
  }, [count, maxValue]);


  function increment() {
    if (count < maxValue) {
      localStorage.setItem('countValue', `${count + 1}`);
      setCount(count + 1);
    }
  }
  function resetCount() {
    localStorage.setItem('countValue', `${startValue}`);
    setCount(startValue);
    setValueError(null)
  }

  const maxValueHandler = (value: number) => {
    setValueError(null)
    setSettingsMode("enter values and press 'set'");
    if (value < 0 || value <= startValue) {
      setMaxValueError('incorrect value')
      setGeneralError('incorrect value')
    } else if (startValue >= 0) {
      setGeneralError(null)
      setStartValueError(null)
      setMaxValueError(null)
    }
    setMaxValue(value)
  }

  const startValueHandler = (value: number) => {
    setValueError(null)
    setSettingsMode("enter values and press 'set'");
    if (value < 0 || value >= maxValue) {
      setStartValueError('incorrect value')
      setGeneralError('incorrect value')
      setStartValue(value)
    } else if (maxValue >= 0) {
      setMaxValueError(null)
      setStartValueError(null)
      setGeneralError(null)
    }
    setStartValue(value)
  }

  const setSettingsValues = () => {
    setCount(startValue);
    setSettingsMode(null);
    localStorage.setItem('maxValue', `${maxValue}`);
    localStorage.setItem('startValue', `${startValue}`);
    localStorage.setItem('countValue', `${startValue}`);
  }


  return (
      <div className="App">

        <Box>
          <Display>
            <Settings
                maxValue={maxValue}
                startValue={startValue}
                maxValueError={maxValueError}
                startValueError={startValueError}
                startValueHandler={startValueHandler}
                maxValueHandler={maxValueHandler}
            />
          </Display>
          <Controls
              generalError={generalError}
              setSettingsValues={setSettingsValues}
              settings={true}
              settingsMode={settingsMode}
          />
        </Box>

        <Box>
          <Display>
            <Count
                settingsMode={settingsMode}
                value={count}
                valueError={valueError}
                generalError={generalError}
            />
          </Display>
          <Controls
              valueError={valueError}
              generalError={generalError}
              settingsMode={settingsMode}
              settings={false}
              increment={increment}
              resetCount={resetCount}
          />
        </Box>

      </div>
  )
}

export default App
