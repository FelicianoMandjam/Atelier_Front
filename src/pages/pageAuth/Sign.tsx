import React, { useContext, useState } from 'react'
import { AuthContext } from '../../utils/context/AuthContext' 

const Sign = () => {
  const [user, setUser] = useState({})
  const { login } = useContext(AuthContext)

  // console.log('login' + login)
  const handleChange = (event) => {
    const { name, value } = event.target
    setUser((user) => ({ ...user, [name]: value }))    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(user)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='email'
          name='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          onChange={handleChange}
        />
        <button>Connexion</button>
      </form>
    </div>
  )
}

export default Sign