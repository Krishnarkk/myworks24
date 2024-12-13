import React from 'react'

const Child = (props) => {
    console.log(props,"rendered")
  return (
    <div>Child {props.name}
    <h1>{props?.val}</h1></div>
  )
}

export default React.memo(Child)