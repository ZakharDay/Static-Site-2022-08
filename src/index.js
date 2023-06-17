import { formatData } from './index_props.js'
import query from 'static-source-data/query'
const indexData = query('indexData')

// const { TextEncoder, TextDecoder } = require('util')
// global.TextEncoder = TextEncoder
// global.TextDecoder = TextDecoder

const React = require('react')
const ReactDOMServer = require('react-dom/server')
const S_LandingContent =
  require('./components/S_LandingContent/S_LandingContent.jsx').default

const props = {
  categories: formatData(indexData)
}

const content = ReactDOMServer.renderToString(
  React.createElement(S_LandingContent, props)
)

export { content }
