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
  let timeout = 2000

  messages.forEach((message, i) => {
    if (i == 0) {
      showMessage(message)
    } else {
      setTimeout(() => {
        showMessage(message)
      }, timeout)

      // timeout = timeout + 2000
      timeout += 2000
    }
  })
})
