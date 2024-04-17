import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <nav>
      <NavLink to="/"> Accueil </NavLink>
      {/* Si le role user  == admin afficher  /formulaire d'ajout   */}
      <NavLink to="/formulaire"> Ajouter Formulaire </NavLink>
      {/* ______________________________________________________ */}
      <NavLink to="/panier"> Panier </NavLink>
      <NavLink to="/sign">Connexion </NavLink>
      <NavLink to="/signUp"> S'inscrire </NavLink>
      </nav>
    </header>
  )
}

export default Header
