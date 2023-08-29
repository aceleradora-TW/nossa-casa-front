import Modal from 'react-modal'
import { useState } from 'react'
import EventsModal from './styled'
import closeIcon from '../galery-modal/close-icon.svg'

const ModalEvents = ({ events = {} }) => {
  const indexWeek = events.date.getDay()
  const daysWeek = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado']
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(!showModal)
  }
  return (
    <>
      <button className='button' onClick={handleClick}>Ver Mais</button>
      <EventsModal>
        <Modal
          isOpen={showModal}
          onRequestClose={handleClick}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <header>
            <img className='exitModalEvents' src={closeIcon} onClick={handleClick} />
            <div className='container-description'>
              <div className='title-events'>
                <h1>{events.nome}</h1>
              </div>
              <div>
                <p>{daysWeek[indexWeek]}</p>
                <p>{events.date.toLocaleDateString('pt-br', { timeZone: 'UTC' })}</p>
              </div>
            </div>
          </header>
        </Modal>
      </EventsModal>
    </>)
}

export default ModalEvents
