import Modal from 'react-modal'
import { useState } from 'react'
import CssModalGlobal from '../css-modal/styled'
import closeIcon from '../galery-modal/close-icon.svg'
import { buttonModal } from '../../constants/constants'

const ModalTherapies = () => {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(!showModal)
  }
  return (
    <>
      <CssModalGlobal>
        <button className="button-styled" onClick={handleClick}>
          {buttonModal}
        </button>
        <Modal
          isOpen={showModal}
          onRequestClose={handleClick}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <img
            className="button-modal"
            src={closeIcon}
            onClick={handleClick}
          />
        </Modal>
      </CssModalGlobal>
    </>
  )
}

export default ModalTherapies
