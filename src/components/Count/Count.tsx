export type CountType = {
  settingsMode: string | null
  value: number
  valueError: string | null
  generalError: string | null
}

export const Count = ({settingsMode, value, valueError, generalError}: CountType) => {

  // debugger
  return (
      <span
          style={{
            fontSize: `${generalError || settingsMode ? '30px' : '100px'}`,
            fontWeight: 'bold',
            color: `${valueError || generalError ? 'red' : '#00b8ce'}`,
            fontFamily: 'Montserrat, sans-serif',
          }}>
        {generalError || settingsMode || value}
      </span>
  );
};