import Modal from 'react-modal'
import { useState } from 'react'
import CssModalGlobal from '../css-modal/styled'
import closeIcon from '../galery-modal/close-icon.svg'
import { styled } from 'styled-components'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Detalhes = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  .title {
    font-weight: 900;
    font-size: 30px;
    padding-left: 30px;
    padding-bottom: 40px;
  }

  .data-inicio,
  .data-fim {
    font-weight: 500;
    padding-left: 15px;
    font-size: 17px;
    padding-bottom: 20px;
  }

  .local, .parceires {
    font-weight: 500;
    padding-left: 30px;
    font-size: 17px;
    padding-bottom: 50px;
    padding-top: 14px;
  }

  .description {
    font-weight: 900;
    font-size: 30px;
    padding-left: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .descricaoCMS {
    padding-left: 30px;
    font-size: 17px;
    text-align: justify;
    width: 85%;
  }

  .button-close,
  .button-container {
    padding-left: 90px;
  }

  .div-preco,
  .oficinaType {
    margin-top: -6%;
    padding-left: 70%;
  }

  .spacingMoney,
  .spacingType {
    margin-left: 30px;
    margin-top: -14px;
  }

  .spacingDate, .spacingLocal {
    margin-left: 21px;
    margin-top: -16px;
  }

  .parce {
    margin-left: 16px;
    margin-top: -16px;
  }

  .spacing-parceires {
    display: inline-block;
    padding-left: 5px;
  }

  .day{
    padding-bottom:20px;
    padding-left: 30px;
    font-weight: 400;
    font-size: 23px;
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

  const handleMonth = (date) => {
    const month = date.toLocaleDateString('pt-BR', { month: 'numeric' })
    return [ month ].join(' ')
  }

  const handleDay = (date) => {
    const day = date.toLocaleDateString('pt-BR', { day: 'numeric' })
    return [ day ].join(' ')
  }


  const dataEmObjDate = new Date(workshops.data_inicio)
  const indexWeek = dataEmObjDate.getDay()
  const daysWeek = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sabado',
  ]

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
                  <p className='day'>{daysWeek[indexWeek]} - {handleDay(new Date(workshops.data_inicio))}/{handleMonth(new Date(workshops.data_inicio))}</p>
                  <div className="data-inicio">
                    <p className="data-inicio">
                      <FontAwesomeIcon icon={faCalendarDays} />{' '}
                      <div className="spacingDate">
                        {handleDate(new Date(workshops.data_inicio))} •{' '}
                        {workshops.horario_inicio} {'> '}
                        {handleDate(new Date(workshops.data_fim))} •{' '}
                        {workshops.horario_fim}
                      </div>
                    </p>
                  </div>
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
                      <div className="spacingMoney">{workshops.preco}</div>
                    </p>
                  </div>
                  <div className="div-local">
                    <p className="local">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <div className="spacingLocal">
                        Oficina presencial em {workshops.local}
                      </div>
                    </p>
                  </div>
                  <div className="oficinaType">
                    <p className="type">
                      <FontAwesomeIcon icon={faLock} />
                      <div className="spacingType">{workshops.tipo}</div>
                    </p>
                  </div>
                  <div className='parceires'>
                    <p className='parceire'>
                    <FontAwesomeIcon icon={faUser} />
                    <div className='parce'>
                    {workshops.parceires?.data.map((parceire, index) => {
                      return <p key={index} className='spacing-parceires'>{ parceire.attributes.nome}  </p>
                    })}
                    </div>
                    </p>
                  </div>
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
