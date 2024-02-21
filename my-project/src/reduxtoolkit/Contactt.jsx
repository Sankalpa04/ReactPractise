import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Contactt = () => {
    const username = useSelector((state) => state.user.value.username);
  return (
    <div>
        <h1>Hi this is contact page {username}</h1>
    </div>
  )
}

export default Contactt