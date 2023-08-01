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
      <main>
        <section className='carrossel'>
          <h1>EVENTOS</h1>
        </section>
        <Events />
        <Parceires />
        <Footer />
      </main>
    </EventsContainer>
  )
}

export default EventsPage
