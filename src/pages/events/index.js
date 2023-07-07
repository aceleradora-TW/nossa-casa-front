import React from 'react'
import EventsContainer from './styled'
import evimg from '../home/Background.png'
import NavBar from '../../components/navbar'
import Parceires from '../../components/parceires'
import Footer from '../../components/footer'
import Events from '../../components/events-carrosel'

const EventsPage = () => {
  return (
    
    <EventsContainer>
  <NavBar/>
      <main>
        <section className='carrossel'>
          <h1>EVENTOS</h1>
        </section>

        <Events />
        <section className='carrossel-eventos'>
          <div className='evento'>
            <img src={evimg} />
            <p>22 Oct 2018</p>
            <h3>Impact Of Extrinsic Motivation On Intrinsic Motivation</h3>
            <button>VER MAIS</button>
          </div>
          <div className='evento'>
            <img src={evimg} />
            <p>22 Oct 2018</p>
            <h3>Impact Of Extrinsic Motivation On Intrinsic Motivation</h3>
            <button>VER MAIS</button>
          </div>
          <div className='evento'>
            <img src={evimg} />
            <p>22 Oct 2018</p>
            <h3>Impact Of Extrinsic Motivation On Intrinsic Motivation</h3>
            <button>VER MAIS</button>
          </div>
        </section>
        <Parceires />
        <Footer />
      </main>
    </EventsContainer>
  )
}

export default EventsPage
