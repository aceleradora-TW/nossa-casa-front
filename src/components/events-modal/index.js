import Modal from 'react-modal'
import { useState } from 'react'
import EventsModal from './styled'
import closeIcon from '../galery-modal/close-icon.svg'

const ModalEvents = ({ events = {} }) => {
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
              <p>{events.nome}</p>
            </div>
          </header>
        </Modal>
      </EventsModal >
    </>)
}

export default ModalEvents
