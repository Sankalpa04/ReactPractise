import React, { useState } from 'react'
import { login, logout } from './Store';
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {
    const [newUsername, setNewUsername] = useState("");

    const dispatch = useDispatch();

    const username = useSelector((state) => state.user.value.username);
    return(
        <div>
            <h1>Hii This is login page {username} </h1>
            <input
                onChange={(e)=>{
                    setNewUsername(e.target.value)
                }}
            />
            <button onClick={()=>dispatch(login({username: newUsername}))}>login</button>
            <button onClick={()=>dispatch(logout())}>logout</button>
        </div>
    )
}

export default Login