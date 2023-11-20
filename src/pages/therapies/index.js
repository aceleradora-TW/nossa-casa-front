import React from 'react'
import NavBar from '../../components/navbar/index'
import Partners from '../../components/partners'
import Footer from '../../components/footer'
import CarouselTherapies from '../../components/carousel-therapies'

export const TherapiesPage = () => {
  return (
    <>
      <NavBar />
      <CarouselTherapies />
        <Partners />
        <Footer />
        </>
  )
}
