import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavBarComponent from './styled'
import logo from './logoMarca.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const linkParceiro = process.env.REACT_APP_LINK_PARCEIRO

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const onClickMenu = () => setToggle(!toggle)

  const newLocal = 'be-partner'

  return (
    <NavBarComponent>
      <div className="container-logo">
        <NavLink to={'../'}>
          <img src={logo} />
        </NavLink>
      </div>
      <div className={`redirecionamento ${toggle}`}>
        <NavLink to={'/sobre'} activeClassName="active" >Sobre</NavLink>
        <NavLink to={'/events'} activeClassName="active" >Eventos</NavLink>
        <NavLink to={'/therapies'} activeClassName="active" >Terapias</NavLink>
        <NavLink to={'/workshops'} activeClassName="active" >Oficinas</NavLink>
        <a
          target="_blank"
          className={newLocal}
          href={linkParceiro}
          rel="noreferrer"
        >
          Ser parceire
        </a>
      </div>
      <span className="icon-menu" onClick={onClickMenu}>
        <FontAwesomeIcon icon={faBars} />
      </span>
    </NavBarComponent>
  )
}

export default NavBar
