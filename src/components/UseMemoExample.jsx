import { useMemo, useState, useEffect, useRef } from 'react';

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  //const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState);
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        className='form-control w-25'
      />

      <h2 className='my-3'>
        The square root of {number} is {sqrt}
      </h2>

      <button onClick={onClick} className='btn btn-primary'>
        Rerender
      </button>
      <h1>Renders: {renders.current}</h1>
    </div>
  );
}

function getSqrt(n) {
  for (let index = 0; index < 10000; index++) {
    console.log(index);
  }
  console.log('Expensive function called');
  return Math.sqrt(n);
}

export default UseMemoExample;
