import React from 'react'

import data from "./data"
import Jokes from './Jokes'

function Map() {

    // const array = [9, 9, 3, 2, 3, 2]
    
    // const squarearray = array.map((item) => {
    //     return item * item
    // })

    // console.log(squarearray)
    // const names = ["okello, thomas, olal, sure, then, our"]

    // const ourNames = names.map(item => item[0].toUpperCase() + item.slice(1))

    // console.log(ourNames)


    // // challange number 3
    // const schools = ["Kanga", "Jkuat", "Kadika", "Paw-ndege", "Ngege"]

    // const html = schools.map(item => `<p> ${ item } </p>`)

    // console.log(html)

    // // The last pract
    // const meals = ["Ugali", "Unga", "Somoko"]

    // const myMeals = meals.map(meal => `<p>${meal}</p>`)

    // console.log(myMeals)

    // Array and jx elements


    const myData = data.map((mydata) => {
        return <Jokes 
            setup={mydata.name}
            puchline={mydata.desc}
        />
    })

  return (
    <div>
          {myData}
    </div>
  )
}

export default Map