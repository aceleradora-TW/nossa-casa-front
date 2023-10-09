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
  faRectangleXmark
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

export const DetailsTherapies = () => {
  const [therapies, setTherapies] = useState([])
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [galleryPhoto, setGalleryPhoto] = useState([])
  const { id } = useParams()
  useEffect(() => {
    cms
      .get(`api/therapies/${id}/?populate=parceires&populate=foto_terapias`)
      .then((response) => {
        const { data } = response.data
        const photoTherapie = data.attributes.foto_oficina
        const images = photoTherapie.data.map((image) => {
          return {
            id: image.id,
            name: image.attributes?.name,
            url: env.URL_CMS + image.attributes?.url
          }
        })
        setGalleryPhoto(images)
        setTherapies(data)
      })
  }, [])

  /* const handleDate = (date) => {
    const day = date.toLocaleDateString(undefined, {
      day: 'numeric',
      Timezone: 'UTF'
    })
    const month = date.toLocaleDateString('pt-BR', { month: 'long' })
    const year = date.toLocaleDateString(undefined, {
      year: 'numeric',
      Timezone: 'UTF'
    })
    return [day, month, year].join(' ')
  }

  const dateAsDateObject = new Date(therapies?.attributes?.data_inicio)
  const indexWeek = dateAsDateObject.getDay()
  const daysWeek = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
  ] */
  return (
    <>
      <section>
        <Details>
          <ul>
            <li>
              <Link className="closeButton" to={'/therapies'}>
                <FontAwesomeIcon
                  icon={faRectangleXmark}
                  size="2xl"
                  style={{ color: '#ff4013' }}
                />
              </Link>
              <h1 className="title">{therapies.attributes?.nome}</h1>
              <div className="start-date">
                <p className="start-date">
                  <FontAwesomeIcon icon={faCalendarDays} size="lg" />{' '}
                  <div className="spacingDate">
                    {therapies.attributes?.horario_inicio} {'> '}
                    {therapies.attributes?.horario_fim}
                  </div>
                  <div>
                  {therapies.attributes?.dias_da_semana}
                  </div>
                </p>
              </div>
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
                    {therapies.attributes?.preco}
                  </div>
                </p>
              </div>
              <div className="div-local">
                <p className="local">
                  <FontAwesomeIcon icon={faLocationDot} size="lg" />
                  <div className="spacingLocal">
                    Terapia presencial em {therapies.attributes?.local}
                  </div>
                </p>
              </div>
              <div className="therapieType">
                <p className="type">
                  <FontAwesomeIcon icon={faLock} size="lg" />
                  <div className="spacingType">
                    {therapies.attributes?.tipo}
                  </div>
                </p>
              </div>
              <div className="partners">
                <p className="partner">
                  <div className="parce">
                    {therapies.attributes?.parceires?.data.map(
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
              <p className="description">Descrição da terapia</p>
              <p className="descriptionCMS">
                {therapies.attributes?.descricao}
              </p>
              {therapies.attributes?.url_inscricao !== null && (
                <a
                  className="button-inscription"
                  href={therapies.attributes?.url_inscricao}
                  target="_blank"
                  rel="noreferrer"
                >
                  Inscreva-se
                </a>
              )}
              {therapies.attributes?.url_inscricao == null && (
                <>
                  <div className="inscriptionIcon">
                    <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                    <h1 className="inscription"> Inscrição não é necessária</h1>
                  </div>
                </>
              )}
            </li>
          </ul>
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
