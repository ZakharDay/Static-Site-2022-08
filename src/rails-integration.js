import './rails-integration.css'

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

document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/api/v1/pins.json')
    .then((response) => {
      response.json().then((data) => {
        console.log('RESPONSE', data)
        renderPins(data)
      })
    })
    .catch((error) => {
      console.log('ERROR', error)
    })
})
