import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ApiFetch = () => {

    const [name, setName] = useState("") 
    const [predictedAge, setPredictedAge] = useState(null)

    const fetchData =()=>{
      axios.get(`https://api.agify.io/?name=${name}`).then((response)=>{
        setPredictedAge(response.data);
      })
    }
  return (
    <div>
        <input placeholder='eg. sankalpa ..' onChange={(e)=>{
          setName(e.target.value);
        }} />
        <button onClick={fetchData}>Guess age</button>
        <p>
            <p>Name: {predictedAge?.name} </p> 
            <p>age: {predictedAge?.age} </p> 
            <p>count: {predictedAge?.count} </p> 
            <p></p>
        </p>
    </div>
  )
}

export default ApiFetch