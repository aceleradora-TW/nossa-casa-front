import EventsStyleDescription from './styled'
import { useState, useEffect } from 'react'
import { cms } from '../../client'
import { useParams } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import {
  faBullhorn,
  faRectangleXmark,
  faUser,
  faPenToSquare,
  faHandHoldingDollar,
  faCalendarDays,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'

export const EventsPageDescription = () => {
  const [event, setEvent] = useState([])
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [galeria, setGaleria] = useState([])
  const { id } = useParams()
  useEffect(() => {
    cms.get(`api/events/${id}/?populate=parceires&populate=fotos_evento`).then((response) => {
      const { data } = response.data
      setEvent(data)

      const fotoDivulgacao = data.attributes.fotos_evento
      const images = fotoDivulgacao.data.map(
        (image) => {
          return {
            id: image.id,
            name: image.attributes?.name,
            url: process.env.REACT_APP_URL_CMS + image.attributes?.url
          }
        }
      )
      setGaleria(images)
    })
  }, [])

  const handleDate = (date) => {
    const dateObject = new Date(date)
    const day = dateObject.toLocaleDateString(undefined, {
      day: 'numeric',
      timeZone: 'UTC'
    })
    const month = dateObject.toLocaleDateString('pt-BR', { month: 'short' })
    const year = dateObject.toLocaleDateString(undefined, {
      year: '2-digit',
      timeZone: 'UTC'
    })
    return [day, month, year].join(' ')
  }

  const week = (date) => {
    const dateAsDateObject = new Date(date)
    const indexWeek = dateAsDateObject.getDay()
    const daysWeek = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado'
    ]
    return daysWeek[indexWeek]
  }

  return (
    <>
      <EventsStyleDescription>
        <section className="description-section">
          <Link className="closeButton" to={'/events'}>
            <FontAwesomeIcon
              icon={faRectangleXmark}
              size="2xl"
              style={{ color: 'black' }}
            />
          </Link>
          <h1 className="title">{event.attributes?.nome}</h1>
          <span className="span-detais">
            <ul id="containerDetails">
              <li>
                <div className="start-date">
                  <p className="start-date">
                    <div className="spacingDate">
                      <FontAwesomeIcon icon={faCalendarDays} size="lg" />{' '}
                      <p>{`
                     ${handleDate(
                       new Date(event.attributes?.data_inicio)
                     )} •
                    ${event.attributes?.horario_inicio} >
                    ${handleDate(new Date(event.attributes?.data_fim))} 
                      • ${event.attributes?.horario_fim}
                      `}</p>
                    </div>
                  </p>
                </div>
              </li>
              <li>
                <div className="div-price">
                  <p className="price">
                    <FontAwesomeIcon
                      icon={faHandHoldingDollar}
                      size="lg"
                      style={{
                        '--fa-secondary-color': '#ffffff',
                        '--fa-primary-opacity': '1'
                      }}
                    />
                    <div className="spacingMoney">
                      {event.attributes?.preco}
                    </div>
                  </p>
                </div>
              </li>
              <li>
                <div className="div-local">
                  <p className="local">
                    <div className="spacingLocal">
                      <FontAwesomeIcon icon={faLocationDot} size="lg" />
                      Evento presencial em {event.attributes?.local}
                    </div>
                  </p>
                </div>
              </li>
              <li>
                <div className="TypeEvent">
                  <p className="type">
                    <FontAwesomeIcon icon={faBullhorn} size="lg" />
                    <div className="spacingType">
                      {event.attributes?.tipo}
                    </div>
                  </p>
                </div>
              </li>
              <li>
                <div className="partners">
                  <p className="partner">
                    <div className="parce">
                      {event.attributes?.parceires?.data.map(
                        (parceire, index) => {
                          if (parceire !== null || parceire !== undefined) {
                            return (
                              <>
                                <FontAwesomeIcon icon={faUser} size="lg" />
                                <p key={index} className="spacing-partners">
                                  {parceire.attributes?.nome}{' '}
                                </p>
                              </>
                            )
                          }
                          return null
                        }
                      )}
                    </div>
                  </p>
                </div>
              </li>
              <li>
                {event.attributes?.url_agendamento == null && (
                  <>
                    <div className="inscriptionIcon">
                      <div>
                        <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                      </div>
                      <p className="inscription">
                        {' '}
                        Inscrição não é necessária
                      </p>
                    </div>
                  </>
                )}
              </li>
            </ul>
          </span>

          <p className="description">Descrição da terapia</p>
          <p className="descriptionCMS">{event.attributes?.descricao}</p>
          {event.attributes?.url_agendamento !== null && (
            <a
              className="button-inscription"
              href={event.attributes?.url_inscricao}
              target="_blank"
              rel="noreferrer"
            >
              Inscreva-se
            </a>
          )}
        </section>
        <section className="page">
          <div className="style-img-swiper">
            <Swiper
              style={{
                '--swiper-navigation-color': '#516B84',
                '--swiper-pagination-color': ''
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {galeria.map((image) => (
                <SwiperSlide key={image.id}>
                  <img src={image.url} alt={image.name} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="style-swiper-fotos">
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={7}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {galeria.map((image) => (
                  <SwiperSlide key={image.id}>
                    <img src={image.url} alt={image.name} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        </EventsStyleDescription>
    </>
  )
}
