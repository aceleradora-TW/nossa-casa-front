import Modal from 'react-modal'
import { useState } from 'react'
import CssModalGlobal from '../css-modal/styled'
import closeIcon from '../galery-modal/close-icon.svg'
import { styled } from 'styled-components'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'

const Detalhes = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  .title {
    font-weight: 900;
    font-size: 30px;
    padding-left: 30px;
    padding-bottom: 50px;
  }

  .data-inicio,
  .data-fim {
    font-weight: 500;
    padding-left: 15px;
    font-size: 17px;
    padding-bottom: 20px;
    padding-right:90px;
  }

  .local {
    font-weight: 500;
    padding-left: 30px;
    font-size: 17px;
    padding-bottom: 20px;
  }

  .description {
    font-weight: 900;
    font-size: 30px;
    padding-left: 30px;
    padding-top: 30px;
    padding-bottom: 20px;
  }

  .descricaoCMS {
    padding-left: 30px;
    font-size: 17px;
    font-size: 17px;
  }

  .button-close,
  .button-container {
    padding-left: 90px;
  }

  .div-preco {
    margin-top: -3%;
    padding-left: 70%;
  }


`
const ModalWorkshops = ({ workshops = {} }) => {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(!showModal)
  }
  const handleDate = (date) => {
    const day = date.toLocaleDateString(undefined, { day: 'numeric' })
    const month = date.toLocaleDateString('pt-BR', { month: 'long' })
    const year = date.toLocaleDateString(undefined, { year: 'numeric' })
    return [day, month, year].join(' ')
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
          <img className="button-close" src={closeIcon} onClick={handleClick} />
          <section>
            <Detalhes>
              <ul>
                <li>
                  <h1 className="title">{workshops.nome}</h1>
                  <div className="data-inicio">
                   <p className="data-inicio">
                     <FontAwesomeIcon icon={faCalendarDays} 
                     /> 
                    . {handleDate(new Date(workshops.data_inicio))} - {workshops.horario_inicio} • {handleDate(new Date(workshops.data_fim))} - {workshops.horario_fim}
                     </p>
                    <div className="div-preco">
                    <p className="preco">
                      <FontAwesomeIcon
                        icon={faHandHoldingDollar}
                        size="xl"
                        style={{
                          '--fa-secondary-color': '#ffffff',
                          '--fa-primary-opacity': '1',
                        }}
                      />
                      . {workshops.preco}
                    </p>
                  </div>
                  </div>

                  <h1 className="local">
                    <FontAwesomeIcon icon={faLocationDot} />. 
                    Oficina presencial em {workshops.local}
                  </h1>

                  <p className="description">Descrição da oficina</p>
                  <p className="descricaoCMS">{workshops.descricao}</p>
                </li>
              </ul>
            </Detalhes>
          </section>
        </Modal>
      </CssModalGlobal>
    </>
  )
}

export default ModalWorkshops
