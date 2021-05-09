const scriptURL = 'https://script.google.com/macros/s/AKfycbwwh_7hSTcZcc-U0kWVJi-ufUB10jE3uj58Z6yjnJn6ONkd40Z6/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})