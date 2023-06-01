import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBarComponent from './styled'
import logo from './logoMarca.png'

const linkPareceiro = process.env.REACT_APP_LINK_PARCEIRO

const NavBar = () => {
  return (
    <NavBarComponent>
     <div className='container-logo'>
     <img src={logo}/>
      </div>
     <div className='redirecionamento'>
        <NavLink to={'/'}>Sobre</NavLink>
        <NavLink to={'/events'}>Eventos</NavLink>
        <NavLink to={'/therapies'}>Terapias</NavLink>
        <NavLink to={'/workshops'}>Oficinas</NavLink>
      </div>
      <a href={linkPareceiro}>
      <button>Seja parceire</button>
      </a>
    </NavBarComponent>
  )
}
export default NavBar
