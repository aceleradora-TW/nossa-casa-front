import {
  faCalendarDays, faHandHoldingDollar,
  faLocationDot,
  faLock,
  faPenToSquare,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import env from 'react-dotenv'
import Modal from 'react-modal'
import { styled } from 'styled-components'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import CssModalGlobal from '../css-modal/styled'
import closeIcon from '../galery-modal/close-icon.svg'
const urlCms = env.URL_CMS

const Detalhes = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  .title {
    font-weight: 900;
    font-size: 40px;
    padding-left: 60px;
    padding-bottom: 40px;
    padding-top: 50px;
  }

  .data-inicio,
  .data-fim {
    font-weight: 500;
    padding-left: 30px;
    font-size: 20px;
  }

  .local,
  .parceires {
    font-weight: 500;
    padding-left: 60px;
    font-size: 20px;
    padding-top: 40px;
    padding-bottom: 12px;
  }

  .description {
    font-weight: 900;
    font-size: 30px;
    padding-left: 60px;
    padding-top: 60px;
    padding-bottom: 20px;
  }

  .descricaoCMS {
    padding-left: 60px;
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
    margin-top: -2%;
    padding-left: 70%;
  }

  .inscricaoIcon {
    margin-top: -7%;
    padding-left: 70%;
  }

  .inscricao {
    margin-top: -2.5%;
    padding-left: 30px;
  }

  .spacingMoney,
  .spacingType {
    margin-left: 30px;
    margin-top: -14px;
  }

  .spacingDate,
  .spacingLocal {
    margin-left: 25px;
    margin-top: -19px;
  }

  .spacingLocal {
    margin-left: 21px;
    margin-top: -16px;
  }

  .parce {
    margin-left: 16px;
    margin-top: -20px;
  }

  .spacing-parceires {
    display: inline-block;
    padding-left: 10px;
  }

  a {
    background: rgb(245, 188, 74);
    color: black;
    border-radius: 3px;
    border: none;
    font-size: 16px;
    width: 182px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
  }

  .button-inscricao {
    background: #f5bc4a;
      border-radius: 3px;
      border: none;
      font-size: 14px;
      width: 10%;
      height: 40px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 43%;
      margin-top: 50px;

  }

  .day {
    padding-bottom: 30px;
    padding-left: 60px;
    padding-top: 20px;
    font-weight: 400;
    font-size: 23px;
  }

  .button-inscricao {
    background: #f5bc4a;
    border-radius: 3px;
    border: none;
    font-size: 14px;
    width: 10%;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 43%;
    margin-top: 200px;
  }

  @media screen and (max-width: 720px) {
    .title {
      padding-top: -20%;
      font-size: 30px;
      padding-left: 30px;
      padding-bottom: 20px;
    }

    .data-inicio,
    .data-fim {
      font-weight: 500;
      padding-left: 15px;
      font-size: 17px;
      padding-bottom: 20px;
    }

    .local,
    .parceires {
      font-weight: 500;
      padding-left: 30px;
      font-size: 17px;
      padding-bottom: 50px;
      padding-top: 14px;
    }

    .description {
      font-weight: 900;
      padding-left: 30px;
      padding-top: 20px;
    }

    .descricaoCMS {
      padding-left: 30px;
    }

    .div-preco,
    .oficinaType {
      margin-top: -6%;
    }

    .inscricaoIcon {
      margin-top: -16.5%;
    }

    .inscricao {
      margin-top: -4%;
    }

    .spacingMoney,
    .spacingType {
      margin-left: 30px;
      margin-top: -14px;
    }

    .spacingDate,
    .spacingLocal {
      margin-left: 21px;
      margin-top: -16px;
    }

    .parce {
      margin-top: -16px;
    }

    .spacing-parceires {
      padding-left: 5px;
    }

    .day {
      padding-bottom: 20px;
      padding-left: 30px;
    }

    .button-inscricao {
      margin-top: 50px;
    }
  }
`
const ModalWorkshops = ({ workshops = {} }) => {
  const [showModal, setShowModal] = useState(false)

  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [oficina, setOficina] = useState([])
  useEffect(() => {
    const images = workshops.foto_oficina.data.map((fotos, index) => {
      return {
        index,
        url: urlCms + fotos.attributes.url,
      }
    })
    setOficina(images)
  })
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
    return [month].join(' ')
  }

  const handleDay = (date) => {
    const day = date.toLocaleDateString('pt-BR', { day: 'numeric' })
    return [day].join(' ')
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
    'Sabado'
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
                  <p className="day">
                    {daysWeek[indexWeek]} -{' '}
                    {handleDay(new Date(workshops.data_inicio))}/
                    {handleMonth(new Date(workshops.data_inicio))}
                  </p>
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
                          '--fa-primary-opacity': '1'
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
                  <div className="parceires">
                    <p className="parceire">
                      <FontAwesomeIcon icon={faUser} />
                      <div>
                        {workshops.parceires.data.map((parceire, index) => {
                          return (
                            <p key={index} className="spacing-parceires">
                              {' '}
                              {parceire.attributes.nome}{' '}
                            </p>
                          )
                        })}
                      </div>
                    </p>
                  </div>
                  <p className="description">Descrição da oficina</p>
                  <p className="descricaoCMS">{workshops.descricao}</p>
                  {
                    workshops.url_inscricao !== null && (
                      <a
                        className='button-inscricao'
                        href={workshops.url_inscricao}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Inscreva-se
                      </a>
                    )
                  }
                  {
                    workshops.url_inscricao == null && (
                      <FontAwesomeIcon icon={faPenToSquare} />
                    )
                  }
                </li >
              </ul >
            </Detalhes >
          </section >
        </Modal >
      </CssModalGlobal >
    </>
  )
}

export default ModalWorkshops
