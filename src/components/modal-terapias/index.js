import Modal from 'react-modal'
import { useState } from 'react'
import TherapiesModal from './styled'
import closeIcon from '../galery-modal/close-icon.svg'
import { buttonModal } from '../../constants/constants'

const ModalTherapies = () => {
  const [modal, setModal] = useState(false)
  const handleClick = () => {
    setModal((modal) => !modal)
  }
  return (
    <>
      <TherapiesModal>
        <button className="button-styled" onClick={handleClick}>
          {buttonModal}
        </button>
        <Modal
          isOpen={modal}
          onRequestClose={handleClick}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <img
            className="button-modal-terapias"
            src={closeIcon}
            onClick={handleClick}
          />
        </Modal>
      </TherapiesModal>
    </>
  )
}

export default ModalTherapies
