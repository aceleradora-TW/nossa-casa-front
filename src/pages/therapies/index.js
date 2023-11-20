import React from 'react'
import NavBar from '../../components/navbar/index'
import Parceires from '../../components/parceires'
import Footer from '../../components/footer'
import CarouselTherapies from '../../components/carousel-therapies'

export const TherapiesPage = () => {
  return (
    <>
      <NavBar />
      <CarouselTherapies />
        <Parceires />
        <Footer />
        </>
  )
}
