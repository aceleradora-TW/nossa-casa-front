import React from 'react'
import NavBar from '../../components/navbar/index'
import Parceires from '../../components/parceires'
import Footer from '../../components/footer'
import TherapiesCarrossel from '../../components/carrossel-terapias'

export const TherapiesPage = () => {
  return (
    <>
      <NavBar />
      <TherapiesCarrossel />
      <Parceires />
      <Footer />
    </>
  )
}
