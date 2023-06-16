import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavBarComponent from './styled'
import logo from './logoMarca.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const linkParceiro = process.env.REACT_APP_LINK_PARCEIRO

const NavBar = () => {
  const [toggle, setToggle] = useState('')
  const onClickMenu = () => {
    setToggle(toggle === 'aparece' ? '' : 'aparece')
  }

  return (
    <NavBarComponent>
      <NavLink to={'../'}>
        <div className='container-logo'>
          <img src={logo} />
        </div>
      </NavLink>
      <div className={`redirecionamento ${toggle}`}>
        <NavLink to={'../'}>Sobre</NavLink>
        <NavLink to={'/events'}>Eventos</NavLink>
        <NavLink to={'/therapies'}>Terapias</NavLink>
        <NavLink to={'/workshops'}>Oficinas</NavLink>
        <a className='ser-parceire' href={linkParceiro}>
          Ser parceire
        </a>
      </div>
      <span className='icon-menu' onClick={onClickMenu}>
        <FontAwesomeIcon icon={faBars} />
      </span>
    </NavBarComponent>
  )
}

export default NavBar
