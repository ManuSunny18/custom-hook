import React from 'react';
import useCounter from './useCounter';

export default ({}) => {
  const { count, setCounter } = useCounter(0);
  console.log(count, 'counter');
  return <button onClick={setCounter}>{count}hello</button>;
};
