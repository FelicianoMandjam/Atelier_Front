import React, { useContext, useState } from 'react'
import { AuthContext } from '../../utils/context/AuthContext'

function Logout() {
const { logout } = useContext(AuthContext)

const handleClick = () => {
logout()
}
  return (
    <div>
      <button onClick={handleClick}>Legout</button>
    </div>
  )
}

export default Logout
