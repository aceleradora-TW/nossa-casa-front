import React, { Children } from 'react'

const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0,0,0, 0.7)',
  zIndex: '1000'
}

const MODAL_STYLE = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '150px',
  backgroundColor: '#fafafa',
  borderRadius: '10px',
  color: 'black'
}

const BUTTON_STYLE = {
  display: 'block',
  width: '73px',
  marginLeft: '90%',
  marginTop: '5px',
  marginBottom: '5px',
  cursor: 'pointer',
  color: 'red'
}

export default function Modal({ isOpen, children, setModalOpen }) {
  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div>
            {children}
          </div>
          <button style={BUTTON_STYLE} onClick={setModalOpen}>X</button>
        </div>
      </div>
    )
  }

  return null
}
