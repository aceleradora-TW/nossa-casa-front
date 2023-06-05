import { useEffect, useState } from 'react'
import { client } from '../../service/client'
import NavBar from '../../components/navbar'

export const WorkshopList = () => {
  const [workshop, setWorkshop] = useState([])
  useEffect(() => {
    client.get('/workshops').then(
      (response) => {
        return setWorkshop(response.data.data.map((workshop) => workshop.attributes))
      })
  }, [])
  return (
    <>
    <NavBar/>
      <h1>Lista de Oficinas</h1>
        <ul>
        {workshop.map((user, index) => (
            <li key={index}>
              <br/>
              <p> Nome: {user.name}</p>
              <br/>
              <p> Descrições: {user.description}</p>
            </li>
        ))}
    </ul>
    </>
  )
}
