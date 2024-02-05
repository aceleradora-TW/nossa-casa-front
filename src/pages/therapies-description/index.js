import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Details from './styled'
import { useState, useEffect } from 'react'
import { cms } from '../../client'
import {
  faUser,
  faPenToSquare,
  faBullhorn,
  faHandHoldingDollar,
  faCalendarDays,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import NavBar from '../../components/navbar'
import { Link, useParams } from 'react-router-dom'

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
        const photoTherapy = data.attributes.foto_terapias
        const images = photoTherapy.data.map((image) => {
          return {
            id: image.id,
            name: image.attributes?.name,
            url: image.attributes?.url
          }
        })
        setGalleryPhoto(images)
        setTherapies(data)
      })
  }, [])

  const handleDate = (date) => {
    const day = date.toLocaleDateString(undefined, {
      day: 'numeric',
      Timezone: 'UTF'
    })
    const month = date.toLocaleDateString('pt-BR', { month: 'short' })
    const year = date.toLocaleDateString(undefined, {
      year: 'numeric',
      Timezone: 'UTF'
    })
    return [day, month, year].join(' ')
  }

  return (
    <>
      <NavBar/>
      <Details>
        <section className="description-section">
          <h1 className="title">{therapies.attributes?.nome}</h1>
          <span className="span-detais">
            <ul id="containerDetails">
              <li>
                <div className="start-date">
                  <p className="start-date">
                    <div className="spacingDate">
                      <FontAwesomeIcon icon={faCalendarDays} size="lg" />{' '}
                      <p>{`
                     ${handleDate(
                       new Date(`${therapies.attributes?.data_inicio}T00:00:00-0300`)
                     )} •
                    ${therapies.attributes?.horario_inicio} >
                    ${handleDate(new Date(`${therapies.attributes?.data_fim}T00:00:00-0300`))} 
                      • ${therapies.attributes?.horario_fim}
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
                      {therapies.attributes?.preco}
                    </div>
                  </p>
                </div>
              </li>
              <li>
                <div className="div-local">
                  <p className="local">
                    <div className="spacingLocal">
                      <FontAwesomeIcon icon={faLocationDot} size="lg" />
                      Terapia presencial em {therapies.attributes?.local}
                    </div>
                  </p>
                </div>
              </li>
              <li>
                <div className="therapieType">
                  <p className="type">
                    <FontAwesomeIcon icon={faBullhorn} size="lg" />
                    <div className="spacingType">
                      {therapies.attributes?.tipo}
                    </div>
                  </p>
                </div>
              </li>
              <li>
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
              </li>
              <li>
                {therapies.attributes?.url_agendamento == null && (
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

          <p className="description">Descrição</p>
          <p className="descriptionCMS">{therapies.attributes?.descricao}</p>
          {therapies.attributes?.url_agendamento !== null && (
            <a
              className="button-inscription"
              href={therapies.attributes?.url_agendamento}
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
    </>
  )
}
