import React, { ReactElement } from 'react'

// interface Props {
//   name: string;
// }

type Props = {
  name: string;
  gender: 'M' | 'F';
  isMarried?: boolean;
  [key:string]: any;
}

type Person = {
 firstName: string;
 lastName: string; 
}

const person: Person = {
  firstName: 'Mike',
  lastName: 'Goodstadt'
}

function MyComp({name, gender, isMarried, person}: Props): ReactElement {
  return (
    <>
      <div>{name}</div>
      <div>{gender}</div>
      <div>{isMarried}</div>
    </>
  )
}

export default MyComp
