import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Details from './styled'
import { useState, useEffect } from 'react'
import { cms } from '../../service/client'
import {
  faUser,
  faPenToSquare,
  faLock,
  faHandHoldingDollar,
  faCalendarDays,
  faLocationDot,
  faRectangleXmark,
} from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import env from 'react-dotenv'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export const DetailsWorkshops = () => {
  const [workshops, setWorkshops] = useState([])
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [galleryPhoto, setGalleryPhoto] = useState([])
  const { id } = useParams()
  useEffect(() => {
    cms
      .get(`api/workshops/${id}/?populate=parceires&populate=foto_oficina`)
      .then((response) => {
        const { data } = response.data
        const photoWorkshop = data.attributes.foto_oficina
        const images = photoWorkshop.data.map((image) => {
          return {
            id: image.id,
            name: image.attributes?.name,
            url: env.URL_CMS + image.attributes?.url,
          }
        })
        setGalleryPhoto(images)
        setWorkshops(data)
      })
  }, [])

  const handleDate = (date) => {
    const day = date.toLocaleDateString(undefined, {
      day: 'numeric',
      Timezone: 'UTF',
    })
    const month = date.toLocaleDateString('pt-BR', { month: 'long' })
    const year = date.toLocaleDateString(undefined, {
      year: 'numeric',
      Timezone: 'UTF',
    })
    return [day, month, year].join(' ')
  }

  const dateAsDateObject = new Date(workshops?.attributes?.data_inicio)
  const indexWeek = dateAsDateObject.getDay()
  const daysWeek = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
  ]

  return (
    <>
      <section>
        <Details>
          <Link className="closeButton" to={'/workshops'}>
            <FontAwesomeIcon
              icon={faRectangleXmark}
              size="2xl"
              style={{ color: '#ff4013' }}
            />
          </Link>
          <h1 className="title">{workshops.attributes?.nome}</h1>
          <span className='span-detais'>
            <p className="day">
                {daysWeek[indexWeek]} -{' '}
                {new Date(workshops.attributes?.data_inicio).toLocaleDateString(
                  'pt-BR'
                )}
              </p>
          <ul id='containerDetails'>
            <li>
            <div className="start-date">
                <p className="start-date">
                  <FontAwesomeIcon icon={faCalendarDays} size="lg" />{' '}
                  <div className="spacingDate">
                    {handleDate(new Date(workshops.attributes?.data_inicio))} •{' '}
                    {workshops.attributes?.horario_inicio} {'> '}
                    {handleDate(
                      new Date(workshops.attributes?.data_fim)
                    )} • {workshops.attributes?.horario_fim}
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
                      '--fa-primary-opacity': '1',
                    }}
                  />
                  <div className="spacingMoney">
                    {workshops.attributes?.preco}
                  </div>
                </p>
              </div>
            </li>
            <li>
              <div className="div-local">
                <p className="local">
                  <FontAwesomeIcon icon={faLocationDot} size="lg" />
                  <div className="spacingLocal">
                    Oficina presencial em {workshops.attributes?.local}
                  </div>
                </p>
              </div>
            </li>
            <li>
              <div className="workshopType">
                <p className="type">
                  <FontAwesomeIcon icon={faLock} size="lg" />
                  <div className="spacingType">
                    {workshops.attributes?.tipo}
                  </div>
                </p>
              </div>
            </li>
            <li>
              <div className="partners">
                <p className="partner">
                  <div className="parce">
                    {workshops.attributes?.parceires?.data.map(
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
              {workshops.attributes?.url_inscricao == null && (
                <>
                  <div className="inscriptionIcon">
                    <div>
                      <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                    </div>
                    <h1 className="inscription"> Inscrição não é necessária</h1>
                  </div>
                </>
              )}
            </li>
          </ul>
          </span>

          <p className="description">Descrição da oficina</p>
          <p className="descriptionCMS">{workshops.attributes?.descricao}</p>
          {workshops.attributes?.url_inscricao !== null && (
            <a
              className="button-inscription"
              href={workshops.attributes?.url_inscricao}
              target="_blank"
              rel="noreferrer"
            >
              Inscreva-se
            </a>
          )}
          <section className="page">
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
                className="mySwiper2"
              >
                {galleryPhoto.map((image) => (
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
                  {galleryPhoto.map((image) => (
                    <SwiperSlide key={image.id}>
                      <img src={image.url} alt={image.name} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>
        </Details>
      </section>
    </>
  )
}
