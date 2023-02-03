import './adcgame.css'

console.error('=====================')
//
//
//

const messageGroups = [
  ['Ghbdtn! Rfr ltkf?', 'Ой', 'Привет! Как дела?', 'Ладно, знаешь меня?'],
  [
    'Хей! приветствую тебя из глубин интернета',
    'Ты ведь не знаешь кто я, верно?'
  ],
  [
    'О, как хорошо, что ты заглянул',
    'Кажется, мы уже встречались?',
    'На вечеринке... Ну этого... того '
  ],
  ['ЙОУ', 'ДИП!', 'РЭП']
]

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function showMessage(message) {
  const element = document.createElement('div')
  element.innerText = message
  element.classList.add('message')

  document.body.appendChild(element)
}

document.addEventListener('DOMContentLoaded', (event) => {
  const messages = sample(messageGroups)
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
