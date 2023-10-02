import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Detalhes from './styled'
import { useState, useEffect } from 'react'
import { cms } from '../../service/client'
import {
  faUser,
  faPenToSquare,
  faLock,
  faHandHoldingDollar,
  faCalendarDays,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import env from 'react-dotenv'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { useParams } from 'react-router'

export const DetailsWorkshops = () => {
  const [workshops, setWorkshops] = useState([])
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [galeria, setGaleria] = useState([])
  const { id } = useParams()
  useEffect(() => {
    cms
      .get(`api/workshops/${id}/?populate=parceires&populate=foto_oficina`)
      .then((response) => {
        const { data } = response.data
        const fotoOficina = data.attributes.foto_oficina
        const images = fotoOficina.data.map((image) => {
          return {
            id: image.id,
            name: image.attributes?.name,
            url: env.URL_CMS + image.attributes?.url,
          }
        })
        setGaleria(images)
        setWorkshops(data)
      })
  }, [])
  console.log(galeria)
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

  const dataEmObjDate = new Date(workshops?.attributes?.data_inicio)
  const indexWeek = dataEmObjDate.getDay()
  const daysWeek = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sabado',
  ]

  return (
    <>
      <section>
        <Detalhes>
          <ul>
            <li>
              <h1 className="title">{workshops.attributes?.nome}</h1>
              <p className="day">
                {daysWeek[indexWeek]} -{' '}
                {new Date(workshops.attributes?.data_inicio).toLocaleDateString(
                  'pt-BR'
                )}
              </p>
              <div className="data-inicio">
                <p className="data-inicio">
                  <FontAwesomeIcon icon={faCalendarDays} />{' '}
                  <div className="spacingDate">
                    {handleDate(new Date(workshops.attributes?.data_inicio))} •{' '}
                    {workshops.attributes?.horario_inicio} {'> '}
                    {handleDate(
                      new Date(workshops.attributes?.data_fim)
                    )} • {workshops.attributes?.horario_fim}
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
                      '--fa-primary-opacity': '1',
                    }}
                  />
                  <div className="spacingMoney">
                    {workshops.attributes?.preco}
                  </div>
                </p>
              </div>
              <div className="div-local">
                <p className="local">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <div className="spacingLocal">
                    Oficina presencial em {workshops.attributes?.local}
                  </div>
                </p>
              </div>
              <div className="oficinaType">
                <p className="type">
                  <FontAwesomeIcon icon={faLock} />
                  <div className="spacingType">
                    {workshops.attributes?.tipo}
                  </div>
                </p>
              </div>
              <div className="parceires">
                <p className="parceire">
                  <FontAwesomeIcon icon={faUser} />
                  <div className="parce">
                    {workshops.attributes?.parceires?.data.map(
                      (parceire, index) => {
                        return (
                          <p key={index} className="spacing-parceires">
                            {parceire.attributes?.nome}{' '}
                          </p>
                        )
                      }
                    )}
                  </div>
                </p>
              </div>
              <p className="description">Descrição da oficina</p>
              <p className="descricaoCMS">{workshops.attributes?.descricao}</p>
              {workshops.attributes?.url_inscricao !== null && (
                <a
                  className="button-inscricao"
                  href={workshops.attributes?.url_inscricao}
                  target="_blank"
                  rel="noreferrer"
                >
                  Inscreva-se
                </a>
              )}
              {workshops.attributes?.url_inscricao == null && (
                <>
                  <div className="inscricaoIcon">
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <h1 className="inscricao"> Inscrição não é necessária</h1>
                  </div>
                </>
              )}
            </li>
          </ul>

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
        </Detalhes>
      </section>
    </>
  )
}
