import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Details from './styled'
import { useState, useEffect } from 'react'
import { cms } from '../../client'
import {
  faUser,
  faPenToSquare,
  faHandHoldingDollar,
  faCalendarDays,
  faLocationDot,
  faRectangleXmark,
  faBullhorn
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

export const WorkshopDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [workshops, setWorkshops] = useState([])
  const [galleryPhoto, setGalleryPhoto] = useState([])
  const { id } = useParams()
  useEffect(() => {
    cms
      .get(`api/workshops/${id}/?populate=parceires&populate=foto_oficina`)
      .then((response) => {
        const { data } = response.data
        const photoWorkshop = data.filter(workshop => workshop !== null && workshop !== undefined).attributes.foto_oficina
        const images = photoWorkshop.data.map((image) => {
          return {
            id: image.id,
            name: image.attributes?.name,
            url: env.URL_CMS + image.attributes?.url
          }
        })
        setGalleryPhoto(images)
        setWorkshops(data)
      })
  }, [])
  const daysOfWeekInPtBr = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
  ]
  const formatDate = (date) => {
    const day = date.toLocaleDateString(undefined, {
      day: 'numeric',
      Timezone: 'UTF'
    })
    const month = date.toLocaleDateString('pt-BR', { month: 'short' })
    const year = date.toLocaleDateString(undefined, {
      year: 'numeric',
      Timezone: 'UTF'
    })
    return `${daysOfWeekInPtBr[date.getDay()]}, ${day} ${month} ${year}`
  }
  const formatWorkshopDuration = (workshop) =>
    `, ${workshop.attributes?.horario_inicio} > ${workshop.attributes?.horario_fim}`

  const endsOnSameDay = (workshop) =>
    workshop.attributes?.data_inicio === workshop.attributes?.data_fim

  const formatWorkshopDates = (workshop) => {
    if (workshop && workshop.attributes && workshop.attributes.data_inicio && workshop.attributes.data_fim) {
      return endsOnSameDay(workshop)
        ? formatDate(new Date(workshop.attributes?.data_inicio))
        : `${formatDate(new Date(workshop.attributes?.data_inicio))} 
        até ${formatDate(new Date(workshop.attributes?.data_fim))}`
    }
  }

  return (
    <>
      <Details>
        <section className='description-section'>
          <Link className="close-button" to={'/workshops'}>
            <FontAwesomeIcon
              icon={faRectangleXmark}
              size="2xl"
              style={{ color: 'black' }}
            />
          </Link>
          <h1 className="title">{workshops.attributes?.nome}</h1>
          <span className="span-detais">
            <ul id="container-details">
              <li>
                <div className="start-date">
                  <div className="spacingDate">
                    <FontAwesomeIcon icon={faCalendarDays} size="lg" />
                    <p>{formatWorkshopDates(workshops)}</p>
                    <p>{formatWorkshopDuration(workshops)}</p>
                  </div>
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
                      {workshops.attributes?.preco}
                    </div>
                  </p>
                </div>
              </li>
              <li>
                <div className="div-local">
                  <p className="local">
                    <div className="spacingLocal">
                      <FontAwesomeIcon icon={faLocationDot} size="lg" />
                      Oficina presencial em {workshops.attributes?.local}
                    </div>
                  </p>
                </div>
              </li>
              <li>
                <div className="workshopType">
                  <p className="type">
                    <FontAwesomeIcon icon={faBullhorn}
                      style={{ '--fa-primary-color': '#000000', '--fa-secondary-color': '#000000', '--fa-secondary-opacity': '1', transform: 'rotate(-15deg)' }}
                      size="lg"
                    />
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
                      {workshops.attributes?.parceires?.data
                        .filter(partner => partner !== null && partner !== undefined)
                        .map((partner, index) => (<>
                          <FontAwesomeIcon icon={faUser} size="lg" />
                          <p key={index} className="spacing-partners">
                            {partner.attributes?.nome}
                          </p>
                        </>)
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
        </section>
        <section className="page">
          <div className="style-img-swiper">
            <Swiper
              style={{
                '--swiper-navigation-color': '#516B84',
                '--swiper-pagination-color': ''
              }}
              loop={true}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              spaceBetween={10}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {galleryPhoto.map((image) => (
                <SwiperSlide key={image.id}>
                  <img src={image.url} alt={image.name} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
              {galleryPhoto.map((image) => (
                <SwiperSlide key={image.id}>
                  <img src={image.url} alt={image.name} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </Details >
    </>
  )
}
