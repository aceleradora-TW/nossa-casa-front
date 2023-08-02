import React from 'react'
import EventsContainer from './styled'
import NavBar from '../../components/navbar'
import Parceires from '../../components/parceires'
import Footer from '../../components/footer'
import Events from '../../components/events-carrosel'

const EventsPage = () => {
  return (
    <EventsContainer>
      <NavBar />
      <div className='carrossel'>
        <h1>EVENTOS</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been thes standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <Events />
      <Parceires />
      <Footer />
    </EventsContainer>
  )
}

export default EventsPage
