import './menubar.scss'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { getSearchRequest } from './utilities.js'

import S_MenuBar from './components/S_MenuBar/S_MenuBar.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.querySelector('.S_MenuBar'))
  root.render(<S_MenuBar searchInputValue={getSearchRequest()} />)
})
