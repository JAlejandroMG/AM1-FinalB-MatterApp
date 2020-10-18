// alert('Aquí ando...')

//!----------------------------- PETICIONES GET -----------------------------!//

//@--------------------- Para obtener todos los usuarios --------------------@//
fetch(`https://matter-app.herokuapp.com/api/v1/users`, {
  headers: {Accept: 'application/json'}})
  .then(response => response.json())
  .then(data => logUsers(data))

const logUsers = (users) => {
  console.log(users);
}

//@------------------------- Para obtener los skills ------------------------@//
fetch(`https://matter-app.herokuapp.com/api/v1/skills`, {
  headers: {Accept: 'application/json'}})
  .then(response => response.json())
  .then(data => logSkills(data))

const logSkills = (skills) => {
  console.log(skills);
}



//!------------------------ Historias de usuario - 1 ------------------------!//

//@------------------------ Para registrar un usuario -----------------------@//
const userData = { email: 'sandbox.dummy-testing1@yahoo.com', password: 'abc123' };

/* fetch('https://matter-app.herokuapp.com/api/v1/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify(userData)
})
  .then(response => response.json())
  .then(data => showNewUser(JSON.parse(data)))

// alert(JSON.stringify(userData));

const showNewUser = (user) => {
  console.log(`Se ha registrado con éxito a ${user}`);
}; */
