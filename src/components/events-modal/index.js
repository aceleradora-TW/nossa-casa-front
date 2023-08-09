import Modal from 'react-modal'
import { useState } from 'react'
import EventsModal from './styled'

const ModalEvents = () => {
  const [modal, setModal] = useState(false)
  const handleClick = () => {
    setModal(modal => !modal)
  }
  return (
    <>
      <button className='button' onClick={handleClick}>Ver Mais</button>
      <EventsModal>
        <Modal
          isOpen={modal}
          onRequestClose={handleClick}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <header>
            <button onClick={handleClick}>close</button>
            <h1>Texto teste</h1>
          </header>
          <div>

          </div>
        </Modal>
      </EventsModal >
    </>)
}

export default ModalEvents
