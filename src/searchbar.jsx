import './searchbar.scss'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { getSearchRequest } from './utilities.js'

import O_SearchBar from './components/O_SearchBar/O_SearchBar.jsx'

const root = createRoot(document.querySelector('.S_MenuBar .W_Search'))
root.render(<O_SearchBar searchInputValue={getSearchRequest()} />)
