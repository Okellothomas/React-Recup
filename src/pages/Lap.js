import React from 'react'
import data from './son'
import MyJson from './MyJson'

function Lap() {

    // We obtain data from json

    const myData = data.map((dat) => {
        <MyJson 
            name={dat.name}
            desc={dat.desc}
            number={dat.number}
            school={dat.school[2]}
        />
    })
  return (
    <div>
        {myData}  
    </div>
  )
}

export default Lap