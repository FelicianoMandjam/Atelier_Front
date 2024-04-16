import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <nav>
      <NavLink to="/"> Accueil </NavLink>
      <NavLink to="/formulaire"> Formulaire </NavLink>
      <NavLink to="/panier"> Panier </NavLink>
      </nav>
    </header>
  )
}

export default Header
