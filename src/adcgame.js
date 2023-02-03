import './adcgame.css'

console.error('=====================')
//
//
//

const messages = [
  'Ghbdtn! Rfr ltkf?',
  'Ой',
  'Привет! Как дела?',
  'Ладно, знаешь меня?'
]

function showMessage(message) {
  const element = document.createElement('div')
  element.innerText = message
  element.classList.add('message')

  document.body.appendChild(element)
}

document.addEventListener('DOMContentLoaded', (event) => {
  showMessage(messages[0])

  setTimeout(() => {
    showMessage(messages[1])
  }, 2000)

  setTimeout(() => {
    showMessage(messages[2])
  }, 4000)

  setTimeout(() => {
    showMessage(messages[3])
  }, 6000)
})
