import React from 'react'
import { createRoot } from 'react-dom/client'
import { getSearchRequest } from './utilities.js'
import { homeURL, menuItems } from './menubar_props.js'

import S_MenuBar from './components/S_MenuBar/S_MenuBar.jsx'

const props = {
  homeURL,
  menuItems
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.S_MenuBar').remove()

  const menubar = document.createElement('div')
  menubar.classList.add('S_MenuBar')
  document.body.prepend(menubar)

  const root = createRoot(menubar)
  root.render(<S_MenuBar searchInputValue={getSearchRequest()} {...props} />)
})
