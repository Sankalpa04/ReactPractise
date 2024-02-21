import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Homepage = () => {
    const username = useSelector((state) => state.user.value.username);
  return (
    <div>
        <h1>Homepage {username}</h1>
    </div>
  )
}

export default Homepage