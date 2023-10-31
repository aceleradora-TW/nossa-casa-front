import EventsStyleDescription from './styled'
import { useState, useEffect } from 'react'
import { cms } from '../../service/client'
import { useParams } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Link, NavLink } from 'react-router-dom'
import env from 'react-dotenv'
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
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

export const EventsPageDescription = () => {
  const [event, setEvent] = useState([])
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [galeria, setGaleria] = useState([])
  const [activities, setActivities] = useState([])
  const { id } = useParams()
  const activitiesList = []
  useEffect(() => {
    cms
      .get(
        `api/events/${id}/?populate=parceires
        &populate=fotos_evento
        &populate=subeventos
        &populate=oficinas
        &populate=oficinas.foto_divulgacao
        &populate=subeventos.foto_divulgacao`
      )
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
        const oficinas = data.attributes.oficinas.data.map((oficina) => {
          console.log('oficina', oficina)
          return oficina.attributes.foto_divulgacao.data.map((foto) => {
            // console.log('foto', foto.attributes.url)
            return {
              id: oficina.id,
              type: 'oficina',
              name: oficina.attributes.nome,
              url: env.URL_CMS + foto.attributes?.url,
            }
          })
        })
        activitiesList.push(oficinas)
        console.log('oficinas')
        console.log(oficinas)
        const subeventos = data.attributes.subeventos.data.map((evento) => {
          // console.log('evento', evento)
          // return evento.attributes.foto_divulgacao.data.map((foto) => {
          return {
            type: 'evento',
            id: evento.id,
            name: evento.attributes.nome,
            url:
              env.URL_CMS +
              evento.attributes.foto_divulgacao.data.attributes.url,
          }
          // })
        })
        activitiesList.push(subeventos)
        setActivities(activitiesList)
        console.log('eventos')
        console.log(subeventos)
      })
  }, [])

  const handleDate = (date) => {
    const dateObject = new Date(date)
    const day = dateObject.toLocaleDateString(undefined, {
      day: 'numeric',
      timeZone: 'UTC',
    })
    const month = dateObject.toLocaleDateString('pt-BR', { month: 'short' })
    const year = dateObject.toLocaleDateString(undefined, {
      year: '2-digit',
      timeZone: 'UTC',
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
      'Sábado',
    ]
    return daysWeek[indexWeek]
  }

  return (
    <div className="full-container">
      <EventsStyleDescription>
        <div className="container-button-exit">
          <Link className="close-button" to={'/events'}>
            <FontAwesomeIcon
              icon={faRectangleXmark}
              size="2xl"
              style={{ color: 'black' }}
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
                <div className="style-icon">
                  <FontAwesomeIcon icon={faCalendarDays} />{' '}
                </div>
                {event.attributes?.data_inicio ===
                event.attributes?.data_fim ? (
                  <p>
                    {`${week(event.attributes?.data_inicio)}, ${handleDate(
                      event.attributes?.data_inicio
                    )}`}
                    <br />
                    {`${event?.attributes?.horario_inicio} > ${event?.attributes?.horario_fim}`}
                  </p>
                ) : (
                  <p>
                    {`${week(event.attributes?.data_inicio)}, ${handleDate(
                      event.attributes?.data_inicio
                    )} até ${week(event.attributes?.data_fim)}, ${handleDate(
                      event.attributes?.data_fim
                    )}`}
                    <br />
                    {`${event?.attributes?.horario_inicio} > ${event?.attributes?.horario_fim}`}
                  </p>
                )}
              </li>
              <li>
                <div className="style-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                {event?.attributes?.local}
              </li>
              <li className="parceires">
                {event?.attributes?.parceires?.data.map((parceire) => {
                  if (parceire !== null || parceire !== undefined) {
                    return (
                      <>
                        <FontAwesomeIcon icon={faUser} className="style-icon" />
                        <p key={parceire.id}>{parceire.attributes?.nome}</p>
                      </>
                    )
                  }
                  return null
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
                  <FontAwesomeIcon
                    icon={faBullhorn}
                    style={{
                      '--fa-primary-color': '#00000',
                      '--fa-secondary-color': '#00000',
                      '--fa-secondary-opacity': '1',
                      transform: 'rotate(-30deg)',
                    }}
                    size="lg"
                  />
                </div>
                {event?.attributes?.tipo}
              </li>
              <li>
                {event?.attributes?.url_inscricao === null && (
                  <div id="no-registration">
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
          <p className="text-title-description">Descrição</p>
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

        {/* <div className="style-swiper-fotos">
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
            {actvities?.map((activitie, index) => {
              if (activitie !== null && activitie !== undefined) {
                return (
                  <div key={index}>
                    {console.log(activitie)}
                    <div>{activitie.name}</div>
                    <SwiperSlide>
                      <img
                        src={activitie.url}
                        alt={activitie.name}
                      />
                      <div>
                        <h3>{activitie.name}</h3>
                      </div>
                      <div>
                        <NavLink to={`/${activitie.type}/${activitie.id}`}>
                          Saiba Mais
                        </NavLink>
                      </div>
                    </SwiperSlide>
                  </div>
                )
              }
              return null
            })}
          </Swiper>
        </div>
        {/* <p>{oficina.attributes?.nome}</p> */}
        {/* <p>{oficina.attributes?.foto_divulgacao}</p> */}
        {/* {if (oficina.attributes?.foto_divulgacao){
                    console.log('teste')
                  }} */}
        {/* {oficina.attributes.foto_divulgacao && console.log('test', oficina.attributes.foto_divulgacao.data[0].attributes.url)}
                  {console.log(event?.attributes?.oficinas?.data.length)} */}
        {/* inicio subeventos */}
        {activities.length > 0 && (
          <section>
            <div className="carrossel">
              <h1>EVENTOS</h1>
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={-110}
              navigation={true}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 1,
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 3,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <section>
                <div className="swiper-slide-atividades">
                  {console.log(activities)}
                  <ul>
                    {activities?.map((activit) => {
                      // if (activit !== null && activit !== undefined) {
                      console.log('Activities')
                      console.log(activit)
                      return activit.map((item) => {
                        return (
                          <li key={item.id}>
                            <div>{item.name}</div>
                            <SwiperSlide>
                              <span className="slide-itens">
                                <img className="img-foto" src={item.url} />
                                <div>
                                  <h3 className="title">{item.name}</h3>
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
                      })

                      // }
                    })}
                  </ul>
                </div>
              </section>
            </Swiper>
          </ section>
        )}
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
