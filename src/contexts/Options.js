import React, { createContext, useEffect, useState } from 'react';

export const OptionsContext = createContext();

export const OptionsProvider = ({ children }) => {
  const blankValues = {
    crease: 'no',
    starch: 'no',
    specialInstructions: '',
  };

  const initialState = () =>
    JSON.parse(localStorage.getItem('options')) || blankValues;

  const [options, setOptions] = useState(initialState);

  useEffect(() => localStorage.setItem('options', JSON.stringify(options)), [
    options,
  ]);

  const updateOptions = values => {
    console.log('Setting options to ', values);
    setOptions(values);
  };

  const clearOptions = () => {
    setOptions(blankValues);
  };

  return (
    <OptionsContext.Provider
      value={{
        options,
        setOptions: updateOptions,
        clearOptions,
      }}>
      {children}
    </OptionsContext.Provider>
  );
};
