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
import { useParams } from 'react-router'

export const DetailsWorkshops = () => {
  const [workshops, setWorkshops] = useState([])
  const { id } = useParams()
  useEffect(() => {
    cms
      .get(`api/workshops/${id}/?populate=parceires, foto_oficina`)
      .then((response) => {
        const { data } = response.data
        setWorkshops(data)
      })
  }, [])

  console.log(workshops)

  const handleDate = (date) => {
    const day = date.toLocaleDateString(undefined, { day: 'numeric' })
    const month = date.toLocaleDateString('pt-BR', { month: 'long' })
    const year = date.toLocaleDateString(undefined, { year: 'numeric' })
    return [day, month, year].join(' ')
  }

  const handleMonth = (date) => {
    const month = date.toLocaleDateString('pt-BR', { month: 'numeric' })
    return [month].join(' ')
  }

  const handleDay = (date) => {
    const day = date.toLocaleDateString('pt-BR', { day: 'numeric' })
    return [day].join(' ')
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
                  {handleDay(new Date(workshops.attributes?.data_inicio))}/
                  {handleMonth(new Date(workshops.attributes?.data_inicio))}
                </p>
                <div className="data-inicio">
                  <p className="data-inicio">
                    <FontAwesomeIcon icon={faCalendarDays} />{' '}
                    <div className="spacingDate">
                      {handleDate(new Date(workshops.attributes?.data_inicio))} •{' '}
                      {workshops.attributes?.horario_inicio} {'> '}
                      {handleDate(new Date(workshops.attributes?.data_fim))} •{' '}
                      {workshops.attributes?.horario_fim}
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
                    <div className="spacingMoney">{workshops.attributes?.preco}</div>
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
                    <div className="spacingType">{workshops.attributes?.tipo}</div>
                  </p>
                </div>
                <div className="parceires">
                  <p className="parceire">
                    <FontAwesomeIcon icon={faUser} />
                    <div className="parce">
                      {workshops.attributes?.parceires?.data.map((parceire, index) => {
                        return (
                          <p key={index} className="spacing-parceires">
                            {parceire.attributes?.nome}{' '}
                          </p>
                        )
                      })}
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
        </Detalhes>
      </section>
    </> 
  )
}
