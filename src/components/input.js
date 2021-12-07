import React from 'react';

function Input({ placeholder, style, onKeyDown }, ref) {
  return (
    <input
      onKeyDown={onKeyDown}
      ref={ref}
      type='text'
      placeholder={placeholder}
      style={style}
    ></input>
  );
}

const ForwardedRef = React.forwardRef(Input);

export default ForwardedRef;
