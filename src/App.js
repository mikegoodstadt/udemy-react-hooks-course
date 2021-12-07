import React, { useState, useRef, useLayoutEffect } from 'react';
import './App.scss';

function useDim(el, val) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    let boundingBox = el.current.getBoundingClientRect();
    setHeight(boundingBox.height);
    setWidth(boundingBox.width);
  }, [val]);

  return { height, width };
}

function App() {
  const [val, setVal] = useState(2);
  const valEl = useRef(null);
  const {height, width} = useDim(valEl, val);

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>
          Height: {height}, Width: {width}
        </h2>
        <div ref={valEl}>{val}</div>
        <button onClick={() => setVal(val * 10)}>10*</button>
      </header>
    </div>
  );
}

export default App;
