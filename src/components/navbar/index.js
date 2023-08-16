import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavBarComponent from './styled'
import logo from './logoMarca.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { sobreNavbar, eventosNavbar, terapiasNavbar, oficinaNavbar, buttonParceire } from '../../constants/constants'
const linkParceiro = process.env.REACT_APP_LINK_PARCEIRO

const NavBar = () => {
  const [toggle, setToggle] = useState(false)

  const onClickMenu = () => setToggle(!toggle)
  const newLocal = 'ser-parceire'

  return (
    <NavBarComponent>
      <div className="container-logo">
        <NavLink to={'../'}>
          <img src={logo} />
        </NavLink>
      </div>
        <div className={`redirecionamento ${toggle ? 'aparece' : ''}`}>
        <NavLink to={'../'}>{sobreNavbar}</NavLink>
        <NavLink to={'/events'}>{eventosNavbar}</NavLink>
        <NavLink to={'/therapies'}>{terapiasNavbar}</NavLink>
        <NavLink to={'/workshops'}>{oficinaNavbar}</NavLink>
        <a
          target="_blank"
          className={newLocal}
          href={linkParceiro}
          rel="noreferrer"
        >
          {buttonParceire}
        </a>
      </div>
      <span className="icon-menu" onClick={onClickMenu}>
        <FontAwesomeIcon icon={faBars} />
      </span>
    </NavBarComponent>
  )
}
export default NavBar
