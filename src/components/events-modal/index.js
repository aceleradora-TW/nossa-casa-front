import Modal from 'react-modal'
import { useState } from 'react'
import EventsModal from './styled'

Modal.setAppElement('#root')

const ModalEvents = () => {
  const [modal, setModal] = useState(false)
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  return (
    <>
      <EventsModal>
        <button className='button' onClick={openModal}>Ver Mais</button>
        <Modal
          isOpen={modal}
          onRequestClose={closeModal}
        >
          <h1>Texto teste</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been thes standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Modal>
      </EventsModal>
    </>)
}

export default ModalEvents