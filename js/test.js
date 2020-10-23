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
/* const getUsers = () => {
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
} */

// getUsers();
//&--------------------------- Ends: GET all users --------------------------&//


//@--------------- Starts: GET all invitations made by a user ---------------@//
/* const idUserInvitationsMade = 162;

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
} */

// getInvitationsMade();
//&---------------- Ends: GET all invitations made by a user ----------------&//


//@-------------------------- Starts:GET all skills -------------------------@//
const getSkills = () => {
  fetch(`${baseURL}${skills}`, {
    headers: getHeaders
  })
    .then(response => {
      status = response.status;
      console.log(`GET skills status: ${status}`)
      return response.json();
    })
    .then(data => showSkills(data))

  const showSkills = (data) => {
    console.log(data);
  }
}

// getSkills();
//--------------------------- Ends: GET all skills ---------------------------//


//@--------------- Starts: GET all invitations sent by a user ---------------@//
const idUserInvitationsMade = 88;

const getInvitationsMade = () => {
  fetch(`${baseURL}${users}/${idUserInvitationsMade}/invitations`, {
    headers: getHeaders
  })
    .then(response => {
      status = response.status;
      console.log(`GET invitations sent status: ${status}`)
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

// getReceivedInvitations();
//&--------------------- Ends: POST Received Invitations --------------------&//


//@------------------------ Starts: Feedback Received -----------------------@//
const idFeedbackReceived = 20; //* Invitación
//* Recibe todo el feedback de una invitación en particular

const getFeedback = () => {
  fetch(`${baseURL}/invitations/${idFeedbackReceived}/feedback`, {
    headers: getHeaders
  })
    .then(response => {
      status = response.status;
      console.log(`GET feedback status: ${status}`)
      return response.json();
    })
    .then(data => showFeedback(data))

  const showFeedback = (data) => {
    console.log(data);
  }
}

// getFeedback();
//-------------------------- Ends: Feedback Received -------------------------//


//@----------------------- Starts: POST Give Feedback -----------------------@//
const invitationID = 20; //* Id de invitación que recibió el usuario
const skillIdFeedback = 3; //* Id de skill
const score = {score: 4} //* Debe ser entre 1 y 5

const postGiveFeedback = () => {
  fetch(`${baseURL}/invitations/${invitationID}/skills/${skillIdFeedback}`, {
    method: `POST`,
    headers: headers,
    body: JSON.stringify(score)
  })
  .then(response => {
    status = response.status;
    console.log(`POST giving feedback status: ${status}`);
    return response.json();
  })
  .then(data => showGivingFeedback(data))

  const showGivingFeedback = (data) => {
    console.log(data);
  };
}

// postGiveFeedback();
//------------------------- Ends: POST Give Feedback -------------------------//

//---------------------- ENDS: HISTORIAS DE USUARIO - 3 ----------------------//
