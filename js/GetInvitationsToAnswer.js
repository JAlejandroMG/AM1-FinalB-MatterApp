//@ Import
import GetSkillsToAnswer from './GetSkillsToAnswer.js';
//@ Instance
const getSkillsToAnswer = new GetSkillsToAnswer;

export default class GetInvitationsToAnswer {
  getInvitationsToAnswer(id) {
    const urlGetInvitations = `https://matter-app.herokuapp.com/api/v1/users/${id}/feedback-invitations`;
    const getHeaders = {'Accept': 'application/json'};
    const invitationsToBeAnswered = [];
    const invitationsIdToBeAnswered = [];

  fetch(urlGetInvitations, {
    method: `GET`,
    headers: getHeaders
  })
  .then(response => {
    status = response.status;
    return response.json();
  })
  .then(data => {
    getInvitationsToBeAnswered(data);
  })

  const getInvitationsToBeAnswered = (invitations) => {
    invitations.forEach((invitation) => {
      // console.log(invitation);
      if(invitation.evaluated_skills < invitation.total_skills) {
        invitationsToBeAnswered.push(invitation);  
      }
    });
    getInvitationsIdToBeAnswered(invitationsToBeAnswered)
  };

  const getInvitationsIdToBeAnswered = (invitations) => {
    invitations.forEach((invitation) => {
      invitationsIdToBeAnswered.push(invitation.id);
    });
  }

  // getSkillsToAnswer.getSkillsToAnswer(invitationsIdToBeAnswered);
 };
};
