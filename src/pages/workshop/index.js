import React from 'react'
import NavBar from '../../components/navbar'
import Partners from '../../components/partners'
import Footer from '../../components/footer'
import CarouselWorkshop from '../../components/carousel-workshop'

export const WorkshopsPage = () => {
  return (
    <>
      <NavBar />
      <CarouselWorkshop />
      <Partners />
      <Footer />
    </>
  )
}
