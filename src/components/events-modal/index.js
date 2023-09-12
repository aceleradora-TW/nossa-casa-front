// import { useState } from 'react'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
// import "bootstrap/dist/css/bootstrap.min.css"
// import Button from "react-bootstrap/Button"
// import Modal from "react-bootstrap/Modal"

// const ModalEvents = ({ events = {} }) => {
//   // const indexWeek = events.date.getDay()
//   // const daysWeek = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado']
//   // const [showModal, setShowModal] = useState(false)
//   const values = [true]
//   const [fullscreen, setFullscreen] = useState(true)
//   const [show, setShow] = useState(false)

//   // const handleClick = () => {
//   //   setShowModal(!showModal)
//   // }
//   // const dateFormat = (date) => {
//   //   return date.slice(0, 5)
//   // }

//   const handleDate = (date) => {
//     const day = date.toLocaleDateString(undefined, { day: 'numeric', timeZone: 'UTC' })
//     const month = date.toLocaleDateString('pt-BR', { month: 'long' })
//     const year = date.toLocaleDateString(undefined, { year: 'numeric' })
//     return [day, month, year].join(' ')
//   }

//   function handleShow(breakpoint) {
//     setFullscreen(breakpoint)
//     setShow(true)
//   }

//   return (
//     <>
//       {
//         values.map((v, idx) => (
//           <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
//             Full screen
//             {typeof v === "string" && `below ${v.split("-")[0]}`}
//           </Button>
//         ))
//       }
//       < Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           hello hello
//         </Modal.Body>
//       </Modal >
//     </>
//   )
// }

// export default ModalEvents
