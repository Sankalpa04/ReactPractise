import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';

const Contact = () => {
  const {username} = useContext(AppContext)
  return (
    <div>This is CONTACT Page, Username: {username}</div>
  )
}

export default Contact;
