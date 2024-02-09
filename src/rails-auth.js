import './rails-integration.css'

const SIGN_IN_URL = 'http://localhost:3000/api/v1/sign_in.json'

function initForm() {
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
          console.log('RESPONSE', data.user.jti)
        })
      })
      .catch((error) => {
        console.log('ERROR', error)
      })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initForm()
})
