import React from 'react'

function Jokes({setup, puchline}) {
  return (
    <div>
          { setup && <p>Setup: {setup}</p>}
          <h4>Punchline: { puchline}</h4>
    </div>
  )
}

export default Jokes