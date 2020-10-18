//!-------------------------------- ENDPOINTS -------------------------------!//
//* BASE_URL
//@ ‘​https://matter-app.herokuapp.com/api/v1​’
//* LOGIN
//@ /auth/login -> post con correo y contraseña, las respuestas pueden ser:
//@ ● status 401 - las credenciales son incorrectas
//@ ● status 2020 - se inició sesión correctamente
//* GET
//@ /users/ -> get para obtener todos los usuarios registrados
//@ /users/{id} -> get para obtener información de un usuario en particular
//@ /skills/ -> get para obtener todas las skills disponibles
//@ /users/{id}/invitations -> get para obtener todas las invitaciones que ha hecho el usuario
//@ /users/{id}/invitations/{id} -> get obtener todo el feedback de una invitación en particular
//* POST
//@ /users/ -> post con email
//@ /users/{id}/invite ->post con email para enviar una invitación
//@ /users/{id}/skills/{id} -> post con score para evaluar una habilidad en particular
//* PUT
//@ /users/{id} -> put para editar información de un usuario en particular
//@ /users/{id}/skills/{id} -> put con score para actualizar una habilidad en particular



//! ----------------------------- Ejemplo de POST ----------------------------@//
//* const data = { email: 'erik3@academlo.com', name: 'Erik' };
//* fetch('https://matter-app.herokuapp.com/api/v1/users', {
//* method: 'POST',
//*   headers: {
//*     'Content-Type': 'application/json',
//*   },
//*     body: JSON.stringify(data),
//* })
//* .then(response => response.json())
//* .then(data => {
//* console.log('Success:', data);
//* })



//!------------------------ Historias de usuario - 5 ------------------------!//

//@--------------- Poder editar mi perfil (nombre(s) y apellidos) --------------@//
const userEdited = {email: '',password: ''};
//* Me pide editar nombre y appelidos pero en body paso email y password de acuerdo a documentación https://documenter.getpostman.com/view/8450870/TVRpz4gT#ce3834b8-781b-492b-b704-75632feb2e54
//* Pero aquí me pide editar nombre y apellidos. ¿Cómo paso esos datos?
const idEdit = 1;

fetch(`https://matter-app.herokuapp.com/api/v1/users/${idEdit}`, {
  method: `PUT`,
  headers: {Accept: 'application/json'},
  body: JSON.stringify(userEdited)
})
  .then(response => response.json())
  .then(data => userEdited(data))

const userEdited = (userEdited) => {
  console.log(userEdited);
};



//!------------------------ Historias de usuario - 4 ------------------------!//

//@------------ Ver el feedback que he recibido de mis compañeros -----------@//

//*---------- Primero solicito todas las invitaciones que he hecho ----------*//
fetch(`https://matter-app.herokuapp.com/api/v1/users/18/invitations`, {
  headers: {Accept: 'application/json'}})
  .then(response => response.json())
  .then(data => logInvitations(data))

const logInvitations = (invitations) => {
  console.log(invitations);
}

//*----- Después con un forEach solicito el feedback de cada invitación -----*//
fetch(`https://matter-app.herokuapp.com/api/v1/users/18/invitations/1`, {
  headers: {Accept: 'application/json'}})
  .then(response => response.json())
  .then(data => logFeedback(data))

const logFeedback = (feedback) => {
  console.log(feedback);
}



//!------------------------ Historias de usuario - 3 ------------------------!//

//@----------------- Dar feedback a quién lo haya solicitado ----------------@//

const idUser = 1;
const idSkill = 1;

fetch(`https://matter-app.herokuapp.com/api/v1/users/${idUser}/skills/${idSkill}`, {
  method: `POST`,
  headers: {Accept: 'application/json'}
})
  .then(response => response.json())
  .then(data => skillEvaluation(data))

const skillEvaluation = (skillEvaluated) => {
  console.log(skillEvaluated);
};
//@ Esto se hace por cada Skill



//!------------------------ Historias de usuario - 2 ------------------------!//

//@---------- Invitar por correo electrónico a que me den feedback ----------@//
const id = 1;

fetch(`https://matter-app.herokuapp.com/api/v1/users/${id}/invite`, {
  method: `POST`,
  headers: {Accept: 'application/json'}
})
  .then(response => response.json())
  .then(data => invitation(data))

const invitation = (invitation) => {
  console.log(invitation);
};



//!------------------------ Historias de usuario - 1 ------------------------!//

//@------------------------ Para registrar un usuario -----------------------@//
const userData = {email: '', password: ''};
//* const userData = {firstName: '', lastName: '', email: '', password: ''};
//* Paso email y password de acuerdo a la documentación https://documenter.getpostman.com/view/8450870/TVRpz4gT#ce3834b8-781b-492b-b704-75632feb2e54
//* Pero en el punto 5 de Hisorias de usuario me pide editar perfil en nombre y apellidos, ¿cómo se pasan al registrarse?

fetch(`https://matter-app.herokuapp.com/api/v1/users`, {
  method: `POST`,
  headers: {Accept: 'application/json'},
  body: JSON.stringify(userData)
})
  .then(response => response.json())
  .then(data => showNewUser(data))

const showNewUser = (user) => {
  console.log(`Se ha registrado con éxito a ${user}`);
};

//@---------------------------- Para hacer Login ----------------------------@//
const userLogin = {email: '', password: ''};

fetch(`https://matter-app.herokuapp.com/api/v1/auth/login`, {
  method: `POST`,
  headers: {Accept: 'application/json'},
  body: JSON.stringify(userLogin)
})
  .then(response => response.json())
  .then(data => showConfirmation(data))

const showConfirmation = (user) => {
  console.log(`Se ha loggeado con éxito ${user}`);
};



//!----------------------------- PETICIONES GET -----------------------------!//

//@--------------------- Para obtener todos los usuarios --------------------@//
fetch(`https://matter-app.herokuapp.com/api/v1/users`, {
  headers: {Accept: 'application/json'}})
  .then(response => response.json())
  .then(data => logUsers(data))

const logUsers = (users) => {
  console.log(users);
}

//@------------------ Para obtener un usuario en particular -----------------@//
fetch(`https://matter-app.herokuapp.com/api/v1/users/18`, {
  headers: {Accept: 'application/json'}})
  .then(response => response.json())
  .then(data => logUser(data))

const logUser = (user) => {
  console.log(user);
}

//@------------------------- Para obtener los skills ------------------------@//
fetch(`https://matter-app.herokuapp.com/api/v1/skills`, {
  headers: {Accept: 'application/json'}})
  .then(response => response.json())
  .then(data => logSkills(data))

const logSkills = (skills) => {
  console.log(skills);
}

//@------- Para obtener todas las invitaciones que ha hecho el usuario ------@//
fetch(`https://matter-app.herokuapp.com/api/v1/users/18/invitations`, {
  headers: {Accept: 'application/json'}})
  .then(response => response.json())
  .then(data => logInvitations(data))

const logInvitations = (invitations) => {
  console.log(invitations);
}

//@------ Para obtener todo el feedback de una invitación en particular -----@//
fetch(`https://matter-app.herokuapp.com/api/v1/users/18/invitations/1`, {
  headers: {Accept: 'application/json'}})
  .then(response => response.json())
  .then(data => logFeedback(data))

const logFeedback = (feedback) => {
  console.log(feedback);
}
