import React from 'react'
import NavBar from '../../components/navbar/index'
import Partners from '../../components/parceires'
import Footer from '../../components/footer'
import TherapiesCarousel from '../../components/carrossel-terapias'

export const TherapiesPage = () => {
  return (
    <>
      <NavBar />
      <TherapiesCarousel />
      <Partners />
      <Footer />
    </>
  )
}
