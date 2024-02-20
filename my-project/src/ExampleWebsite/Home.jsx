import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <div>This is HOME page, Username: {username}</div>
  )
}

export default Home