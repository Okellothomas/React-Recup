import React from 'react'

function Jokes({setup, puchline, number, games}) {
  return (
    <div>
          { setup && <h3>Setup: {setup}</h3>}
          <p style={{ display: puchline ? "block" : "none" }}>Punchline: {puchline}</p>
          <p>{games[2]}</p>
          <p>{number}</p>
          <hr />
    </div>
  )
}

export default Jokes