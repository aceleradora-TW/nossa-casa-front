import Modal from 'react-modal'
import { useState } from 'react'
import closeIcon from '../galery-modal/close-icon.svg'

const ModalEvents = ({ events = {} }) => {
  const indexWeek = events.date.getDay()
  const daysWeek = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado']
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(!showModal)
  }
  const handleMonth = (date) => {
    const month = date.toLocaleDateString('pt-BR', { timeZone: 'UTC', month: 'numeric' })
    return [month].join(' ')
  }

  const handleDay = (date) => {
    const day = date.toLocaleDateString('pt-BR', { timeZone: 'UTC', day: 'numeric' })
    return [day].join(' ')
  }

  return (
    <>
      <button className='button' onClick={handleClick}>Ver Mais</button>
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
                <h1>{events.name}</h1>
              </div>
              <div className='dia-events'>
                <p>{daysWeek[indexWeek]}
                {handleDay(events.date)}
                {handleMonth(events.date)}

                </p>
              </div>
              <div className='dia-hora-eventos'>
              <p>{events.time_start}</p>
              <p>{events.time_end}</p>
              </div>
              <p className='local-events'>{events.location}</p>
              <p>nome dos parceires</p>
              <p className='preco-events'>{events.price}</p>
              <p>{events.type}</p>
              <p>{events.description}</p>
            </div>
          </header>
        </Modal>
    </>)
}

export default ModalEvents
