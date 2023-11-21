import { StyledAbout } from "./styled"
import NavBar from '../../components/navbar'
import { cms } from '../../client'
import { useEffect, useState } from "react"

const PageAbout = () => {
  const [about, setAbout] = useState([])
  useEffect(() => {
    cms.get('api/plural-sobre-nos/?populate=foto').then((response) => {
      const { data } = response.data
      console.log(data)
      const aboutDescription = data.map(description => {
        if(description.attributes){
          return {
            descricao1: description.attributes.descricao1,
            descricao2: description.attributes.descricao2,
            descricao3: description.attributes.descricao3,
            descricao4: description.attributes.descricao4,
            descricao5: description.attributes.descricao5
          }
        }})
      setAbout(aboutDescription)
    })
  }, [])
  console.log(about[0].descricao1)
  return (
    <>
      <StyledAbout>
        <div className="container">
          <div>
            <ul>
            </ul>
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