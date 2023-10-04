import EventsStyleDescription from './styled'
import { useState, useEffect } from 'react'
import { cms } from '../../service/client'
import { useParams } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Link } from 'react-router-dom'
import env from 'react-dotenv'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import {
  faRectangleXmark,
  faUser,
  faPenToSquare,
  faLock,
  faHandHoldingDollar,
  faCalendarDays,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import eventModel from '../models/event'

export const EventsPageDescription = () => {
  const [event, setEvent] = useState([])
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [galeria, setGaleria] = useState([])
  const { id } = useParams()
  useEffect(() => {
    cms
      .get(`api/events/${id}/?populate=parceires&populate=fotos_evento`)
      .then((response) => {
        const { data } = response.data
        setEvent(data)

        const fotoDivulgacao = data.attributes.fotos_evento
        const images = fotoDivulgacao.data.map((image) => {
          return {
            id: image.id,
            name: image.attributes?.name,
            url: env.URL_CMS + image.attributes?.url,
          }
        })
        setGaleria(images)
      })
  }, [])

  const { fullDate, startTime, endTime } = eventModel.formattedDate(event)

  return (
    <div className="full-container">
      <EventsStyleDescription>
        <div className="container-button-exit">
          <Link className="close-button" to={'/events'}>
            <FontAwesomeIcon
              icon={faRectangleXmark}
              size="2xl"
              style={{ color: '#ff4013' }}
            />
          </Link>
        </div>
        <div className="title">
          <h1>{event?.attributes?.nome}</h1>
        </div>
        <div className="container">
          <div className="text">
            <ul>
              <li>
                <p>{fullDate}</p>
              </li>
              <li>
                <div className="style-icon">
                  <FontAwesomeIcon icon={faCalendarDays} />{' '}
                </div>
                {`${fullDate} ● ${startTime} > ${fullDate} ● ${endTime}`}
              </li>
              <li>
                <div className="style-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                Oficina presencial em {event?.attributes?.local}
              </li>
              <li className="parceires">
                <div className="style-icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                {event?.attributes?.parceires?.data.map((parceire) => {
                  return <p key={parceire.id}>{parceire.attributes?.nome}</p>
                })}
              </li>
            </ul>
          </div>
          <div className="text2">
            <ul>
              <li>
                <div className="style-icon">
                  <FontAwesomeIcon icon={faHandHoldingDollar} />
                </div>
                {event?.attributes?.preco !== null
                  ? event?.attributes?.preco
                  : 'Evento Gratuito'}
              </li>
              <li>
                <div className="style-icon">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                {event?.attributes?.tipo}
              </li>
              <li>
                {event?.attributes?.url_inscricao === null && (
                  <div>
                    <div className="style-icon">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </div>
                    Inscrição não é necessária
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="description">
          <p className="text-title-description">Descrição da oficina</p>
          <p>{event?.attributes?.descricao}</p>
        </div>
        <div className="Container-button">
          {event.attributes?.url_inscricao !== null && (
            <a
              className="button-enrollment"
              href={event.attributes?.url_inscricao}
              target="_blank"
              rel="noreferrer"
            >
              Inscreva-se
            </a>
          )}
        </div>
        <section className="container-carousel">
          <div className="style-img-swiper">
            <Swiper
              style={{
                '--swiper-navigation-color': '#516B84',
                '--swiper-pagination-color': '',
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="first-carousel"
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
                className="second-carousel"
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
    </div>
  )
}
