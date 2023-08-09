import Modal from 'react-modal'
import { useState } from 'react'
import EventsModal from './styled'
import closeIcon from '../galery-modal/close-icon.svg'

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
          <img className='exitModalEvents' src={closeIcon} onClick={handleClick} />
            <h1>Texto teste</h1>
          </header>
          <div>

          </div>
        </Modal>
      </EventsModal >
    </>)
}

export default ModalEvents
