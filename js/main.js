// alert('Aquí ando...')

fetch(`https://matter-app.herokuapp.com/api/v1/users/`)
  .then(response => response.json())
  .then(data => console.log(data))

