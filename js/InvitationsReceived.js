//[---------------------------- Starts: Settings ----------------------------]//
//+ Import
import InvitationsFeedback from './InvitationsFeedback.js';
//+ Instance
const invitationsFeedback = new InvitationsFeedback;
//]----------------------------- Ends: Settings -----------------------------[//



export default class InvitationsReceived {
  //* Obtengo las invitations recibidas por el usuario 
  getInvitations(idUser) {
    const urlGetInvitations = `https://matter-app.herokuapp.com/api/v1/users/${idUser}/feedback-invitations`;
    const getHeaders = {'Accept': 'application/json'};
    
    fetch(urlGetInvitations, {
      method: `GET`,
      headers: getHeaders
    })
    .then(response => {
      status = response.status;
      return response.json();
    })
    .then(data => {
      this.getInvitationsFeedbackLeft(data);
    })
  };


  //* Obtengo las invitaciones cuyo feedback está incompleto para todos los skills
  getInvitationsFeedbackLeft(invitations) {
    const invitationsFeedbackLeft = [];
    invitations.forEach((invitation) => {
      if(invitation.evaluated_skills < invitation.total_skills) {
        invitationsFeedbackLeft.push(invitation);
      }
    });
    this.getInvitationsFeedbackLeftId(invitationsFeedbackLeft);
  };
  

  //* Obtengo los id de las invitaciones cuyo feedback está incompleto y de los usuarios que las enviaron
  getInvitationsFeedbackLeftId(invitations) {
    const totalSkills = invitations[0].total_skills;
    const invitationsFeedbackLeft = [];
    const option = 1;
    invitations.forEach((invitation) => {
      invitationsFeedbackLeft.push({invitation_id: invitation.id, user_id: invitation.user_id});
    });
    //* Solicito el feedback de las invitaciones cuyo feedback está incompleto
    invitationsFeedback.getInvitationsFeedback(invitationsFeedbackLeft, totalSkills, option);
  };
};
