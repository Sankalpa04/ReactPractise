import React, { useState } from 'react'
import { AppContext } from '../App'
import { useContext } from 'react'


const ChangeProfile = () => {
    const { setUsername } = useContext(AppContext)
    const [newUsername, setNewUsername] = useState("");

    return (
    <div>
        <input type="text" onChange={(event)=>{
            setNewUsername(event.target.value)
        }} />
        <button onClick={()=>{
            setUsername(newUsername)
        }}>Change</button>
    </div>
  )
}

export default ChangeProfile