//[---------------------------- Starts: Settings ----------------------------]//
//+ Import
import InviteUsers from './InviteUsers.js';
import InvitationsReceived from './InvitationsReceived.js';
//+ Instance
const inviteUsers = new InviteUsers();
const invitationsReceived = new InvitationsReceived;
//+ User
const idUser = JSON.parse(sessionStorage.getItem('authenticated')).id;
const name = JSON.parse(sessionStorage.getItem('authenticated')).name;
const email = JSON.parse(sessionStorage.getItem('authenticated')).email;
//]----------------------------- Ends: Settings -----------------------------[//



//{------------------ Starts: Invitar a que me den Feedback -----------------}//
document.getElementById('invite').addEventListener('submit', (event) => {
  event.preventDefault();
  emailInvite = document.getElementById('email').value;
  inviteUsers.sendInvitation(id, emailInvite);
})
//}------------------- Ends: Invitar a que me den Feedback ------------------{//


//{------------- Starts: Ver skills pendientes por dar feedback -------------}//
invitationsReceived.getInvitations(idUser);
//}-------------- Ends: Ver skills pendientes por dar feedback --------------{//



//[------------------------- Starts: GlobalFunctions ------------------------]//
//]-------------------------- Ends: GlobalFunctions -------------------------[//
