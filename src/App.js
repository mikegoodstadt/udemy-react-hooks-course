import React, {useState, useMemo} from 'react';
import './App.scss';
import Child from './components/child';

function App() {
  const [i, setI] = useState(0);

  function onClickHandle(e) {
    setI(i + 1);
  }

  const memoChild = useMemo(() => {
    return <Child></Child>
  }, [i]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>i: {i}</h2>
        <button onClick={onClickHandle}>Increment I</button>
        <h3>Normal Render</h3>
        <Child></Child>
        <h3>Memo Render</h3>
        {memoChild}
      </header>
    </div>
  );
}

export default App;
