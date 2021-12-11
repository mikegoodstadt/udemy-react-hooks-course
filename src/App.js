import React, { useState } from 'react';
import './App.scss';

const initList = [1, 2, 3, 4, 5, 6];

function App() {
  const [list, setList] = useState(initList);
  const [draggedItem, setDraggedItem] = useState(null);

  function onDragStartHandle(e, i) {
    setDraggedItem(list[i]);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  }

  function onDraggedOver(i) {
    const draggedOverItem = list[i];

    if(draggedOverItem === draggedItem) {
      return;
    }

    const items = list.filter( item => item !== draggedItem);

    items.splice(i, 0, draggedItem);

    setList(items);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Drag and Drop</h3>
        <ul>
          {list.map((item, i) => {
            return (
              <li key={i} onDragOver={() => onDraggedOver(i)} className='item-style'>
                <div draggable onDragStart={(e) => onDragStartHandle(e, i)}>
                  {item}
                </div>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
