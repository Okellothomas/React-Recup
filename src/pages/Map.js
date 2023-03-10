import React from 'react'

function Map() {

    const array = [9, 9, 3, 2, 3, 2]
    
    const squarearray = array.map((item) => {
        return item * item
    })

    console.log(squarearray)
    const names = ["okello, thomas, olal, sure, then, our"]

    const ourNames = names.map((item) => {
        if (item[0]) {
            return item[0].toUpperCase
        } else {
            return item.toLowerCase
        }
    })

    console.log(ourNames)
    

  return (
    <div>Map</div>
  )
}

export default Map