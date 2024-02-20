// create three buttons one for increment decrement and reset
import React from 'react'
import { useState } from 'react'

const ExerciseThree = () => {

    const [numb, setNumb] = useState(0)
    const increase =()=>{
        setNumb(numb + 1)
    }

    const decrease =()=>{
        setNumb(numb - 1)
    }
    
    const reset =()=>{
        setNumb(0);
    }


    return (    
        <div className="input">
            <div>
                <h1>Hi there it's me {numb}</h1>
                <button onClick={increase}>increase</button>
                <button onClick={decrease}>decrease</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>

  )
}

export default ExerciseThree
