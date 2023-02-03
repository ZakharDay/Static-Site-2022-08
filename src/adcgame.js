import './adcgame.css'

console.error('=====================')
//
//
//

const messageGroups = [
  {
    questions: [
      'Ghbdtn! Rfr ltkf?',
      'Ой',
      'Привет! Как дела?',
      'Ладно, знаешь меня?'
    ],
    answers: ['Да', 'Нет']
  },
  {
    questions: [
      'Хей! приветствую тебя из глубин интернета',
      'Ты ведь не знаешь кто я, верно?'
    ],
    answers: ['Вообще-то знаю', 'Нет']
  },
  {
    questions: [
      'О, как хорошо, что ты заглянул',
      'Кажется, мы уже встречались?',
      'На вечеринке... Ну этого... того '
    ],
    answers: ['Ну точно, было', 'Ты меня с кем-то путаешь']
  },
  {
    questions: ['ЙОУ', 'ДИП!', 'РЭП'],
    answers: ['ДИП!', 'ЭЭЭ, ЧТО?']
  }
]

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function showQuestions() {
  const wrapper = document.createElement('div')
  wrapper.classList.add('questionsWrapper')

  const messageGroup = sample(messageGroups)
  let timeout = 2000

  messageGroup.questions.forEach((message, i) => {
    if (i == 0) {
      showQuestion(wrapper, message)
    } else {
      if (i + 1 == messageGroup.questions.length) {
        setTimeout(() => {
          showQuestion(wrapper, message)
          showAnswers(messageGroup.answers)
        }, timeout)
      } else {
        setTimeout(() => {
          showQuestion(wrapper, message)
        }, timeout)

        // timeout = timeout + 2000
        timeout += 2000
      }
    }
  })

  document.body.appendChild(wrapper)
}

function showQuestion(wrapper, question) {
  const element = document.createElement('div')
  element.innerText = question
  element.classList.add('question')

  wrapper.appendChild(element)
}

function showAnswers(answers) {
  const wrapper = document.createElement('div')
  wrapper.classList.add('answersWrapper')

  answers.forEach((answer, i) => {
    const element = document.createElement('div')
    element.innerText = answer
    element.classList.add('answer')

    element.addEventListener('click', () => {
      console.log(answer)

      showQuestions()
    })

    wrapper.appendChild(element)
  })

  document.body.appendChild(wrapper)
}

document.addEventListener('DOMContentLoaded', () => {
  showQuestions()
})
