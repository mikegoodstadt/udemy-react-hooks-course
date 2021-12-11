import React from 'react'
import './../../styles/common.scss';
import './Button.scss';

/**
 *
 * @deprecated Do not use
 * @author Mike
 * @version 1.1.1
 */

function Button({children, type, onClick}) {
  let localClass='primary';

  if(type==='primary'){
    localClass='primary';
  }
  
  if(type==='disabled') {
    localClass='disabled';
  }
  
  if(type==='secondary') {
    localClass='secondary';
  }

  const cls = `radius15 bgYellow fontBlack pad8 width100 ${localClass}`.trim();
   
  return (
    <div className='btnClass'>
      <button onClick={onClick} className={cls}>{children}</button>
    </div>
  )
}

export default Button
