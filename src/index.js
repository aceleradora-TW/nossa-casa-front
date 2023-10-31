import Modal from 'react-modal'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import { Outlet } from 'react-router'
Modal.setAppElement('#root')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
