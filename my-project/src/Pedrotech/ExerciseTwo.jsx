import React from 'react'

const ExerciseTwo = () => {
    const planets =[
        {name : "MErcury", isGasPlanet: false},
        {name : "Earth", isGasPlanet: false},
        {name : "Jupiter", isGasPlanet: true},
        {name : "Venus", isGasPlanet: false},
        {name : "Neptune", isGasPlanet: true},
        {name : "Uranus", isGasPlanet: true},
    ]
  return (
    <div>
        {planets.map((naam,i) => (
            <div key = {i}> { naam.isGasPlanet && <h2> {naam.name} </h2>} </div>
        ))}
    </div>
  )
}

export default ExerciseTwo