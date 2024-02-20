import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import ChangeProfile from './ChangeProfile'

const Profile = () => {
  const {username} = useContext(AppContext)
  return (
    <div>
      This is Profile Page, username : {username}
      <ChangeProfile/>
    </div>
    
  )
}

export default Profile