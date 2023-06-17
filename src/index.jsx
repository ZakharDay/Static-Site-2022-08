import React from 'react'
import { createRoot } from 'react-dom/client'
import { getHomepageTeasers } from './search_data.js'
import { formatData } from './index_props.js'

import S_LandingContent from './components/S_LandingContent/S_LandingContent.jsx'

document.addEventListener('DOMContentLoaded', () => {
  getHomepageTeasers().then((data) => {
    // console.log('FROM DB', formatData(data))
    const props = {
      categories: formatData(data)
    }

    const contentElement = document.querySelector('.S_LandingContent')
    contentElement.innerHTML = ''

    const root = createRoot(contentElement)
    root.render(<S_LandingContent {...props} />)
  })
})
