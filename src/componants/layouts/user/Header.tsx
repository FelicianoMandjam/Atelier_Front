import React from 'react'
import { NavLink , Link } from "react-router-dom";
import Logout from '../../../pages/pageAuth/Logout';

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
      <Logout/>
      </nav>
    </header>
  )
}

export default Header
