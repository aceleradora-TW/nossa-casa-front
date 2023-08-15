import React from 'react'
import EventsContainer from './styled'
import NavBar from '../../components/navbar'
import Parceires from '../../components/parceires'
import Footer from '../../components/footer'
import Events from '../../components/events-carrosel'

export const EventsPage = () => {
  return (
    <EventsContainer>
      <NavBar />
      <Events />
      <Parceires />
      <Footer />
    </EventsContainer>
  )
}
