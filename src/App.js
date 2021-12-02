import React, { useState } from 'react';
import './App.scss';
import Item from './components/item';

const initList = [
  { name: 'tomato', calorie: 20 },
  { name: 'rice', calorie: 30 },
  { name: 'candy', calorie: 100 },
];

function App() {
  const [list, setList] = useState(initList);
  const [editable, setEditable] = useState(false);

  function removeItemHandle(e) {
    const filteredList = list.filter((v) => v.name !== e.target.name);
    setList(filteredList);
  }

  function makeEditableHandle() {
    setEditable(true);
  }

  function keyPressHandle(e, i) {
    if (e.key === 'Enter') {
      setEditable(!editable);
      console.log(e);
      console.log(i);
      setList(
        list.map((item, k) =>
          k === i ? { ...item, name: e.target.value } : item
        )
      );
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Grocery List</h2>
        {list.map((v, i) => {
          return (
            <Item
              key={`${i}${v.name}${v.calorie}`}
              item={v}
              onClick={removeItemHandle}
              editable={editable}
              onDoubleClick={makeEditableHandle}
              onKeyPress={keyPressHandle}
              index={i}
            ></Item>
          );
        })}
      </header>
    </div>
  );
}

export default App;
