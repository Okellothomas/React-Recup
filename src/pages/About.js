import React from 'react'

function About() {
    // we can do a little bit of object distructuring

    const person = {
        name: "okello",
        school: "Kanga",
        church: "Adwen",
        books : "egw"
    }

    const { name, school, church, books } = person
    
    console.log(name, school, church, books)
  return (
    <div>About</div>
  )
}

export default About