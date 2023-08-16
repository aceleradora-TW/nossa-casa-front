import Modal from 'react-modal'
import { useState } from 'react'
import CssModalGlobal from '../css-modal/styled'
import closeIcon from '../galery-modal/close-icon.svg'

const ModalWorkshops = () => {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(!showModal)
  }
  return (
    <>
      <CssModalGlobal>
        <button className="button-styled" onClick={handleClick}>
          Ver Mais
        </button>
        <Modal
          isOpen={showModal}
          onRequestClose={handleClick}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <img className="button-modal" src={closeIcon} onClick={handleClick} />
        </Modal>
      </CssModalGlobal>
    </>
  )
}

export default ModalWorkshops
