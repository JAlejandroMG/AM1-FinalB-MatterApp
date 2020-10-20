//@---------------------- Starts: Parámetros Endpoints ----------------------@//
const baseURL = "https://matter-app.herokuapp.com/api/v1";
const users = "/users";
const skills = "/skills";
const login = "/auth/login";

const getHeaders = {'Accept': 'application/json'};
const headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};

let status;
//@----------------------- Ends: Parámetros Endpoints -----------------------@//



document.getElementById('login').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const userLogin = {email: email, password: password};
  postLogin(userLogin);
})

//! login.js:15 Uncaught TypeError: Cannot read property 'addEventListener' of null at login.js:15

// 63 - sandbox.dummy-testing1@yahoo.com
// 88 - clozano@ejemplo.com - Carlos Lozano
// 91 - clozano1@ejemplo.com - Carlos1

const postLogin = (userLogin) => {
  fetch(`${baseURL}${login}`, {
    method: `POST`,
    headers: headers,
    body: JSON.stringify(userLogin)
  })
    .then(response => {
      status = response.status;
      // console.log(`POST login status: ${status}`);
      if(status !== 200) {document.getElementById('login').reset()};
      return response.json();
    })
    .then(data => showLogin(data))

  const showLogin = (data) => {
    // console.log(data);
    sessionStorage.setItem('authenticated', JSON.stringify({name: data.name, email: data.email}));
    location.replace('../index.html');
  };
};
