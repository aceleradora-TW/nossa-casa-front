import { StyledAbout } from './styled'
import NavBar from '../../components/navbar'
import { cms } from '../../client'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

const PageAbout = () => {
  const [about, setAbout] = useState([])
  const urlCms = process.env.REACT_APP_URL_CMS
  useEffect(() => {
    cms.get('api/plural-sobre-nos/?populate=foto').then((response) => {
      const { data } = response.data
      if (data) {
        const aboutDescription = data.map((description) => {
          return {
            descricao: description.attributes?.descricao,
            foto: description.attributes?.foto?.data?.attributes?.url
          }
        })
        setAbout(aboutDescription)
      }
    })
  }, [])
  return (
    <>
      <NavBar></NavBar>
      <StyledAbout>
        {about.length > 0 ? <img src={urlCms + about[0].foto} /> : <div></div>}

        {/* Verifica o tipo retornado na description */}
        {about.length > 0 ? console.log(typeof about[0].descricao ) : <div></div>}
        <ul>
          {about.map((description, key) => (
            <li key={key}>{console.log(typeof description.descricao)}</li>
          ))}
        </ul>

        {/* <ReactMarkdown>
          {about.length > 0 ? (
            <ul>
              <li>{about[0].descricao}</li>
            </ul>
          ) : (
            <div></div>
          )}
        </ReactMarkdown> */}
      </StyledAbout>
    </>
  )
}

export default PageAbout
