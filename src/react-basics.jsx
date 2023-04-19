import './react-basics.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

import O_Schedule from './react-basics/O_Schedule.jsx'

const mainTitle = 'Schedule'

const events = [
  { title: 'React workshop 09', description: '18 APR 2023' },
  { title: 'React workshop 10', description: '18 APR 2023' },
  { title: 'React workshop 11', description: '18 APR 2023' },
  { title: 'React workshop 12', description: '18 APR 2023' },
  { title: 'React workshop 13', description: '18 APR 2023' },
  { title: 'React workshop 14', description: '18 APR 2023' },
  { title: 'React workshop 15', description: '18 APR 2023' },
  { title: 'React workshop 16', description: '18 APR 2023' }
]

const root = createRoot(document.getElementById('app'))
root.render(<O_Schedule mainTitle={mainTitle} events={events} />)
