import React from 'react'
import EventsContainer from './styled'
import NavBar from '../../components/navbar'
import Parceires from '../../components/parceires'
import Footer from '../../components/footer'
import CarouselEvents from '../../components/carousel-events'

export const EventsPage = () => {
  return (
    <EventsContainer>
      <NavBar />
      <CarouselEvents />
      <Parceires />
      <Footer />
    </EventsContainer>
  )
}
