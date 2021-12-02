import React from 'react';
import './item.css';

function Item(props) {
  return (
    <div className='item-style'>
      {props.editable ? (
        <input
          type='text'
          onKeyPress={(e) => props.onKeyPress(e, props.index)}
          defaultValue={props.item.name}
        ></input>
      ) : (
        <h3 onDoubleClick={props.onDoubleClick}>{props.item.name}</h3>
      )}
      <h3>{props.item.calorie}</h3>
      <button
        name={props.item.name}
        onClick={props.onClick}
        className='remove-button'
      >
        Remove
      </button>
    </div>
  );
}

export default Item;
