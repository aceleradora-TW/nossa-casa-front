import EventsStyleDescription from './styled'
import { useState, useEffect } from 'react'
import { cms } from '../../client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Link, NavLink, useParams } from 'react-router-dom'
import { formatWorkshopDates } from '../../helpers/format-data'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import {
  faBullhorn,
  faUser,
  faPenToSquare,
  faHandHoldingDollar,
  faCalendarDays,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
import NavBar from '../../components/navbar'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export const EventsPageDescription = () => {
  const [event, setEvent] = useState([])
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [galeria, setGaleria] = useState([])
  const [activities, setActivities] = useState([])
  const { id } = useParams()
  useEffect(() => {
    cms
      .get(`api/events/${id}/`, {
        params: {
          populate: [
            'parceires',
            'fotos_evento',
            'subeventos',
            'oficinas',
            'oficinas.foto_divulgacao',
            'subeventos.foto_divulgacao'
          ]
        }
      })
      .then((response) => {
        const { data } = response.data
        setEvent(data)

        const fotoDivulgacao = data.attributes.fotos_evento
        const images = fotoDivulgacao.data.map((image) => {
          return {
            id: image.id,
            name: image.attributes?.name,
            url: image.attributes?.url
          }
        })
        setGaleria(images)

        const oficinas = data.attributes.oficinas.data.map((oficina) => {
          return {
            id: oficina.id,
            type: 'workshops',
            name: oficina.attributes.nome,
            url: oficina.attributes.foto_divulgacao.data[0].attributes.url,
            data_inicio: oficina.attributes.data_inicio,
            horario_inicio: oficina.attributes.horario_inicio
          }
        })

        const subeventos = data.attributes.subeventos.data.map((evento) => {
          return {
            type: 'events',
            id: evento.id,
            name: evento.attributes.nome,
            url: evento.attributes.foto_divulgacao.data.attributes.url,
            data_inicio: evento.attributes.data_inicio,
            horario_inicio: evento.attributes.horario_inicio
          }
        })
        setActivities(subeventos.concat(oficinas))
      })
  }, [id])

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
  return (
    <div className="full-container">
      <NavBar />
      <EventsStyleDescription>
        <div className="container-button-exit"></div>
        <section className="description-section">
          <div className="title">
            <h1>{event?.attributes?.nome}</h1>
          </div>
          <ul className="container">
            <li>
              <div className="style-icon">
                <FontAwesomeIcon icon={faCalendarDays} />{' '}
              </div>
              <p>{formatWorkshopDates(event)}</p>
            </li>
            <li>
              <div className="style-icon">
                <FontAwesomeIcon icon={faHandHoldingDollar} />
              </div>
              <p>{event?.attributes?.preco ?? 'Evento Gratuito'}</p>
              
            </li>
            <li>
              <div className="style-icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <p>{event?.attributes?.local}</p>
            </li>
            <li>
              <div className="style-icon">
                <FontAwesomeIcon
                  icon={faBullhorn}
                  style={{
                    '--fa-primary-color': '#00000',
                    '--fa-secondary-color': '#00000',
                    '--fa-secondary-opacity': '1',
                    transform: 'rotate(-30deg)'
                  }}
                  size="lg"
                />
              </div>
              <p>{event?.attributes?.tipo}</p>
              
            </li>
            <li className="parceires">
                {event?.attributes?.parceires?.data
                  ?.filter(
                    (partner) => partner !== null || partner !== undefined
                  )
                  ?.map((partner) => (
                    <>
                    <div>
                      <FontAwesomeIcon icon={faUser} className="style-icon" />
                      <p key={crypto.randomUUID()}>
                        {partner.attributes?.nome}
                      </p>
                    </div>
                    </>
                  ))}
            </li>

            <li>
              {event?.attributes?.url_inscricao === null && (
                <div id="no-registration">
                  <div className="style-icon">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                  <p>Inscrição não é necessária</p>
                </div>
              )}
            </li>
          </ul>
          <div className="description">
            <p className="text-title-description">Descrição</p>
            {(
              <div>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {event?.attributes?.descricao}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </section>
        <div className="Container-button">
          {event.attributes?.url_inscricao !== null && (
            <a
              className="button-inscription"
              href={event.attributes?.url_inscricao}
              target="_blank"
              rel="noreferrer"
            >
              Inscreva-se
            </a>
          )}
        </div>

        {activities.length > 0 && (
          <section>
            <div className="carrossel">
              <h1>PROGRAMAÇÃO</h1>
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={-110}
              navigation={true}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 1
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 2
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 3
                }
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <section>
                <div className="swiper-slide-atividades">
                  <ul>
                    {activities.map((item) => {
                      return (
                        <li key={crypto.randomUUID()}>
                          <div>{item.name}</div>
                          <SwiperSlide key={crypto.randomUUID()}>
                            <span className="slide-itens">
                              <img className="img-foto" src={item.url} />
                              <div>
                                <h3 className="title">{item.name}</h3>
                                {event.attributes?.data_inicio !==
                                  event.attributes?.data_fim && (
                                  <h5 className="date">
                                    {handleDate(item.data_inicio)}
                                  </h5>
                                )}
                                <h5 className="hour">{item.horario_inicio}</h5>
                              </div>
                              <div className="styled-button">
                                <NavLink to={`/${item.type}/${item.id}`}>
                                  Saiba Mais
                                </NavLink>
                              </div>
                            </span>
                          </SwiperSlide>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </section>
            </Swiper>
          </section>
        )}
        <section className="container-carousel">
          <div className="style-img-swiper">
            <Swiper
              style={{
                '--swiper-navigation-color': '#516B84',
                '--swiper-pagination-color': ''
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {galeria.map((image) => (
                <SwiperSlide key={crypto.randomUUID()}>
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
                breakpoints={{
                  '@0.00': {
                    slidesPerView: 3,
                    spaceBetween: 1
                  },
                  '@0.75': {
                    slidesPerView: 4,
                    spaceBetween: 2
                  },
                  '@1.00': {
                    slidesPerView: 7,
                    spaceBetween: 1
                  }
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {galeria.map((image) => (
                  <SwiperSlide key={crypto.randomUUID()}>
                    <img className="" src={image.url} alt={image.name} />
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
