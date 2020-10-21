import InviteUsers from './InviteUsers.js';

const invite = new InviteUsers();


//@---------------------- Starts: Parámetros Endpoints ----------------------@//
const baseURL = "https://matter-app.herokuapp.com/api/v1";
const users = "/users";
const skills = "/skills";
const login = "/auth/login";

const getHeaders = {'Accept': 'application/json'};
const headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};

let status;
//&----------------------- Ends: Parámetros Endpoints -----------------------&//


//@--------------- Starts: Para invitar a que nos den Feedback --------------@//
document.getElementById('invite-users').addEventListener('submit', (event) => {
  event.preventDefault();
  const id = JSON.parse(sessionStorage.getItem('authenticated')).id
  const email = document.getElementById('email').value;
  invite.inviteUsers(id, email);
})
//&---------------- Ends: Para invitar a que nos den Feedback ---------------&//


/* const user = JSON.parse(sessionStorage.getItem('authenticated'));
console.log(JSON.parse(sessionStorage.getItem('authenticated')).id); */