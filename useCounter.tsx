import React, { useRef, useState } from 'react';
const useCounter = (initialState) => {
  const [counter, setCounterState] = useState(initialState);
  const setCounter = () => {
    setCounterState((prev) => {
      return prev + 1;
    });
  };
  return {
    count: counter,
    setCounter,
  };
};
export default useCounter;
