import React from 'react'
import EventsContainer from './styled'
import NavBar from '../../components/navbar'
import Partners from '../../components/partners'
import Footer from '../../components/footer'
import CarouselEvents from '../../components/carousel-events'

export const EventsPage = () => {
  return (
    <EventsContainer>
      <NavBar />
      <CarouselEvents />
      <Partners />
      <Footer />
    </EventsContainer>
  )
}
