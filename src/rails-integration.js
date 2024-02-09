import './rails-integration.css'

const PINS_URL = 'http://localhost:3000/api/v1/pins.json'

let jti

function renderPins(data) {
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
    document.body.appendChild(pinElement)
  })
}

function initForm() {
  const form = document.getElementById('pinForm')
  const button = form.querySelector('input[type="submit"]')

  button.addEventListener('click', (e) => {
    e.preventDefault()

    const formContent = new FormData(form)

    fetch(PINS_URL, {
      headers: { Authorization: jti },
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

document.addEventListener('DOMContentLoaded', () => {
  fetch(PINS_URL)
    .then((response) => {
      response.json().then((data) => {
        console.log('RESPONSE', data)
        renderPins(data.pins)

        jti = data.jti

        initForm()
      })
    })
    .catch((error) => {
      console.log('ERROR', error)
    })
})
