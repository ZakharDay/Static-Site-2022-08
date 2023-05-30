import './search.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { getSearchRequest } from './utilities.js'

import S_SearchContent from './components/S_SearchContent/S_SearchContent.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.querySelector('.W_ContentReactModule'))
  root.render(<S_SearchContent searchInputValue={getSearchRequest()} />)
})
