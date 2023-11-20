import React from 'react'
import NavBar from '../../components/navbar'
import Parceires from '../../components/parceires'
import Footer from '../../components/footer'
import CarouselWorkshop from '../../components/carousel-workshop'

export const WorkshopsPage = () => {
  return (
    <>
      <NavBar />
      <CarouselWorkshop />
      <Parceires />
      <Footer />
    </>
  )
}
