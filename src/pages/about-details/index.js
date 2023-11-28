import { StyledAbout } from "./styled"
import NavBar from '../../components/navbar'
import { cms } from '../../client'
import { useEffect, useState } from "react"

const PageAbout = () => {
  const [about, setAbout] = useState([])
  useEffect(() => {
    cms.get('api/plural-sobre-nos/?populate=foto').then((response) => {
      const { data } = response.data
      const aboutDescription = data.map(description => {
        if (description.attributes) {
          return {
            descricao: description.attributes.descricao,
            foto: description.attributes.foto.data.attributes.url
          }
        }
      })
      setAbout(aboutDescription)
      console.log(about)
    })
  }, [])
  return (
    <>
      <StyledAbout>
        <div className="container">
          <div>
          </div>
          <div>
            <p>teste</p>
          </div>
        </div>
      </StyledAbout>
    </>
  )
}

export default PageAbout