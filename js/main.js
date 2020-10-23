//@ Import
import InviteUsers from './InviteUsers.js';
import GetInvitationsToAnswer from './GetInvitationsToAnswer.js';
//@ Instance
const invite = new InviteUsers();
const getInvitationsToAnswer = new GetInvitationsToAnswer;
//@ Usuario
const id = JSON.parse(sessionStorage.getItem('authenticated')).id;
const name = JSON.parse(sessionStorage.getItem('authenticated')).name;
const email = JSON.parse(sessionStorage.getItem('authenticated')).email;
// console.log(id, name, email);


//@--------------- Starts: Para invitar a que nos den Feedback --------------@//

/* document.getElementById('invite').addEventListener('submit', (event) => {
  event.preventDefault();
  emailInvite = document.getElementById('email').value;
  invite.inviteUsers(id, emailInvite);
}) */
//! LISTO

//&---------------- Ends: Para invitar a que nos den Feedback ---------------&//

  

//@---------- Starts: Veo invitaciones recibidas para dar Feedback ----------@//

getInvitationsToAnswer.getInvitationsToAnswer(id);

//&----------- Ends: Veo invitaciones recibidas para dar Feedback -----------&//
