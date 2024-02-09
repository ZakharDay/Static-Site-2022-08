import './rails-spa.css'
import Cookies from 'js-cookie'

const SIGN_IN_URL = 'http://localhost:3000/api/v1/sign_in.json'
const SIGN_UP_URL = 'http://localhost:3000/api/v1/sign_up.json'
const SIGN_OUT_URL = 'http://localhost:3000/api/v1/sign_out.json'
const PINS_URL = 'http://localhost:3000/api/v1/pins.json'

function initApp() {
  if (Cookies.get('jti') == undefined) {
    swithToSignIn()
  } else {
    swithToSignedIn()
  }
}

function swithToSignIn() {
  const body = document.body

  body.classList.remove('signedIn')
  body.classList.add('signIn')

  initSignInForm()
  initSignUpForm()
}

function swithToSignedIn() {
  const body = document.body

  body.classList.remove('signIn')
  body.classList.add('signedIn')

  initPinForm()
  getPins()
  initSignOutLink()
}

function initSignInForm() {
  const form = document.getElementById('signInForm')
  const button = form.querySelector('input[type="submit"]')

  button.addEventListener('click', (e) => {
    e.preventDefault()

    const formContent = new FormData(form)

    fetch(SIGN_IN_URL, {
      method: 'POST',
      body: formContent
    })
      .then((response) => {
        response.json().then((data) => {
          console.log('RESPONSE', data)
          Cookies.set('jti', data.user.jti)
          swithToSignedIn()
        })
      })
      .catch((error) => {
        console.log('ERROR', error)
      })
  })
}

function initSignUpForm() {
  const form = document.getElementById('signUpForm')
  const button = form.querySelector('input[type="submit"]')

  button.addEventListener('click', (e) => {
    e.preventDefault()

    const formContent = new FormData(form)

    fetch(SIGN_UP_URL, {
      method: 'POST',
      body: formContent
    })
      .then((response) => {
        response.json().then((data) => {
          console.log('RESPONSE', data)
          Cookies.set('jti', data.user.jti)
          swithToSignedIn()
        })
      })
      .catch((error) => {
        console.log('ERROR', error)
      })
  })
}

function initPinForm() {
  const form = document.getElementById('pinForm')
  const button = form.querySelector('input[type="submit"]')

  button.addEventListener('click', (e) => {
    e.preventDefault()

    const formContent = new FormData(form)

    fetch(PINS_URL, {
      headers: {
        Authorization: Cookies.get('jti')
      },
      method: 'POST',
      body: formContent
    })
      .then((response) => {
        response.json().then((data) => {
          console.log('RESPONSE', data)
        })
      })
      .catch((error) => {
        console.log('ERROR', error)
      })
  })
}

function getPins() {
  fetch(PINS_URL)
    .then((response) => {
      response.json().then((data) => {
        console.log('RESPONSE', data)
        renderPins(data.pins)
      })
    })
    .catch((error) => {
      console.log('ERROR', error)
    })
}

function renderPins(data) {
  const container = document.getElementById('pinsSection')

  data.forEach((pin) => {
    const pinElement = document.createElement('a')
    pinElement.classList.add('pin')
    pinElement.href = pin.url

    const pinTitle = document.createElement('div')
    pinTitle.classList.add('pinTitle')
    pinTitle.innerText = pin.title

    const pinDescription = document.createElement('div')
    pinDescription.classList.add('pinDescription')
    pinDescription.innerText = pin.description

    const pinImage = document.createElement('img')
    pinImage.classList.add('pinImage')
    pinImage.src = pin.pin_image

    pinElement.appendChild(pinTitle)
    pinElement.appendChild(pinDescription)
    pinElement.appendChild(pinImage)
    container.appendChild(pinElement)
  })
}

function initSignOutLink() {
  const a = document.getElementById('signOutLink')

  a.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(SIGN_OUT_URL, {
      headers: { Authorization: Cookies.get('jti') },
      method: 'POST',
      body: {}
    })
      .then((response) => {
        response.json().then((data) => {
          console.log('RESPONSE', data)

          Cookies.remove('jti')
          swithToSignIn()
        })
      })
      .catch((error) => {
        console.log('ERROR', error)
      })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initApp()
})
