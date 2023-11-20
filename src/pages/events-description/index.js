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
    <div className='full-container'>
      <EventsStyleDescription>
        <div className='container-button-exit'>
          <Link className='close-button' to={'/events'} ><FontAwesomeIcon icon={faRectangleXmark} size="2xl" style={{ color: 'black' }} /></Link>
        </div>
        <div className='title'>
          <h1>{event?.attributes?.nome}</h1>
        </div>
        <div className='container'>
          <div className='text'>
            <ul>
              <li>
                <div className='style-icon'>
                  <FontAwesomeIcon icon={faCalendarDays} />{' '}
                </div>
                {
                  event.attributes?.data_inicio === event.attributes?.data_fim
                    ? (
                      <p>
                        {`${week(event.attributes?.data_inicio)}, ${handleDate(event.attributes?.data_inicio)}`}
                        <br />
                        {`${event?.attributes?.horario_inicio} > ${event?.attributes?.horario_fim}`}
                      </p>
                    )
                    : (
                      <p>
                        {`${week(event.attributes?.data_inicio)}, ${handleDate(event.attributes?.data_inicio)} até ${week(event.attributes?.data_fim)}, ${handleDate(event.attributes?.data_fim)}`}
                        <br />
                        {`${event?.attributes?.horario_inicio} > ${event?.attributes?.horario_fim}`}
                      </p>
                    )
                }
              </li>
              <li>
                <div className='style-icon'>
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                {event?.attributes?.local}
              </li>
              <li className='parceires'>
                {event?.attributes?.parceires?.data.map((parceire) => {
                  if (parceire !== null || parceire !== undefined) {
                    return (
                      <>
                        <FontAwesomeIcon icon={faUser} className='style-icon' />
                        <p key={parceire.id}>
                          {parceire.attributes?.nome}
                        </p>
                      </>
                    )
                  } return null
                })}
              </li>
            </ul>
          </div>
          <div className='text2'>
            <ul>
              <li>
                <div className='style-icon'>
                  <FontAwesomeIcon icon={faHandHoldingDollar} />
                </div>
                {event?.attributes?.preco !== null ? (event?.attributes?.preco) : 'Evento Gratuito'}
              </li>
              <li>
                <div className='style-icon'>
                  <FontAwesomeIcon icon={faBullhorn}
                    style={{ '--fa-primary-color': '#00000', '--fa-secondary-color': '#00000', '--fa-secondary-opacity': '1', transform: 'rotate(-30deg)' }}
                    size="lg"
                  />
                </div>
                {event?.attributes?.tipo}
              </li>
              <li>
                {event?.attributes?.url_inscricao === null && (
                  <div id='no-registration'>
                    <div className='style-icon'>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </div>
                    Inscrição não é necessária
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='description'>
          <p className='text-title-description'>Descrição</p>
          <p>{event?.attributes?.descricao}</p>
        </div>
        <div className='Container-button'>
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
        <section className='container-carousel'>
          <div className='style-img-swiper'>
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
              className="first-carousel"
            >
              {galeria.map((image) => (
                <SwiperSlide key={image.id}>
                  <img src={image.url} alt={image.name} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='style-swiper-fotos'>
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
          </div >
        </section>
      </EventsStyleDescription >
    </div>
  )
}
