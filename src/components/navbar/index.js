import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavBarComponent from './styled'
import logo from './logoMarca.png'
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const linkParceiro = process.env.REACT_APP_LINK_PARCEIRO
=======
const linkParceiro = process.env.REACT_APP_LINK_PARCEIRE
>>>>>>> 9b7cda91b3a49d096394938f0320392e27a65a11

const NavBar = () => {
  const [toggle, setToggle] = useState('')
  const onClickMenu = () => {
    setToggle(toggle === 'aparece' ? '' : 'aparece')
  }

  // const [setIsFixed] = useState(false)
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setIsFixed(true)
  //     } else {
  //       setIsFixed(false)
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  const newLocal = 'ser-parceire'

  return (
    <NavBarComponent className="oiw" >
        <div className="container-logo">
          <NavLink to={'../'}>
            <img src={logo} />
          </NavLink>
        </div>
        <div className={`redirecionamento ${toggle}`}>
          <NavLink to={'../'}>Sobre</NavLink>
          <NavLink to={'/events'}>Eventos</NavLink>
          <NavLink to={'/therapies'}>Terapias</NavLink>
          <NavLink to={'/workshops'}>Oficinas</NavLink>
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
