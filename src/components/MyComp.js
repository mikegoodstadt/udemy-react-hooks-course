//@flow
import React from 'react'

type MyCompProps = {
  name: string,
  age: Number,
  childreb: React.Node
}

MyComp.defaultProps = {
  name: 'John',
  children: <div>default</div>
}
function MyComp(props:MyCompProps) {
  return (
    <div>
      {props.name}
    </div>
  )
}

export default MyComp
