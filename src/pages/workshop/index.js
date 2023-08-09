import React from 'react'
import NavBar from '../../components/navbar'
import Parceires from '../../components/parceires'
import Footer from '../../components/footer'
import WorkshopsCarrossel from '../../components/carrossel-oficinas'

export const WorkshopsPage = () => {
  return (
    <>
      <NavBar />
      <WorkshopsCarrossel />
      <Parceires />
      <Footer />
    </>
  )
}
