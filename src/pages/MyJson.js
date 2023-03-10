import React from 'react'

function MyJson(props) {
  return (
    <div>
          <h1>{props.name}</h1>
          <p>{props.desc}</p>
          <p>{ props.number}</p>
          <p>{ props.school}</p>
    </div>
  )
}

export default MyJson