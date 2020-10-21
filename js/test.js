//@---------------------- Starts: Parámetros Endpoints ----------------------@//
const baseURL = "https://matter-app.herokuapp.com/api/v1";
const users = "/users";
const skills = "/skills";
const login = "/auth/login";

const getHeaders = {'Accept': 'application/json'};
const headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};

let status;
//@----------------------- Ends: Parámetros Endpoints -----------------------@//


//@-------------------------- Starts: GET all users -------------------------@//
const getUsers = () => {
  fetch(`${baseURL}${users}`, {
    headers: getHeaders
  })
    .then(response => {
      status = response.status;
      console.log(`GET users status: ${status}`)
      return response.json();
    })
    .then(data => showUsers(data))

  const showUsers = (data) => {
    console.log(data);
  }
}

// getUsers();
//&--------------------------- Ends: GET all users --------------------------&//


//@--------------- Starts: GET all invitations made by a user ---------------@//
const idUserInvitationsMade = 162;

const getInvitationsMade = () => {
  fetch(`${baseURL}${users}/${idUserInvitationsMade}/invitations`, {
    headers: getHeaders
  })
    .then(response => {
      status = response.status;
      console.log(`GET invitations made status: ${status}`)
      return response.json();
    })
    .then(data => showInvitationsMade(data))

  const showInvitationsMade = (data) => {
    console.log(data);
  }
}

// getInvitationsMade();
//&---------------- Ends: GET all invitations made by a user ----------------&//


//@-------------------- Starts: POST Received Invitations -------------------@//
const invitatedID = 63; //* Id de usuario que recibio invitaciones

const getReceivedInvitations = () => {
  fetch(`${baseURL}${users}/${invitatedID}/feedback-invitations`, {
    method: `GET`,
    headers: getHeaders
  })
  .then(response => {
    status = response.status;
    console.log(`GET receiving feedback invitations status: ${status}`);
    return response.json();
  })
  .then(data => showReceivedInvitations(data))

  const showReceivedInvitations = (data) => {
    console.log(data);
  };
}

getReceivedInvitations();
//&--------------------- Ends: POST Received Invitations --------------------&//
