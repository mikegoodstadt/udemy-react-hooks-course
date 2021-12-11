import React from 'react';
import propTypes from 'prop-types';

function MyComp({ str, onClick }) {
  return <div onClick={onClick}>{str}</div>;
}

MyComp.propTypes = {
  str: propTypes.string,
  onClick: propTypes.func
  obj:propTypes.shape({
    age:propTypes.number,
    name:propTypes.string,
    gender:propTypes.oneOf(['M', 'F']);
    bithDate:propTypes.instanceOf(Date)
  })
};

export default MyComp;
