import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>
        INICIO
      </NavLink>
      <NavLink to="/blog" className={({ isActive }) => isActive ? "activo" : undefined}>
        BLOG
        </NavLink>
      <NavLink to="/tienda" className={({ isActive }) => isActive ? "activo" : undefined}>
        TIENDA
        </NavLink>
    </header>
  )
}

export default Header