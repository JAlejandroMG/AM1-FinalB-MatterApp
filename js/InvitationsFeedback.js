//[---------------------------- Starts: Settings ----------------------------]//
//+ Import
import SkillsFeedbackLeft from './SkillsFeedbackLeft.js';
//+ Instance
const skillsFeedbackLeft = new SkillsFeedbackLeft;
//]----------------------------- Ends: Settings -----------------------------[//



export default class InvitationsFeedback {
  getInvitationsFeedback(invitations, totalSkills, option) {
    const invitationsArray = [];
    invitations.forEach((invitation) => {
      invitationsArray.push(invitation.invitation_id)
    });
    const ids = invitationsArray.reverse();

    const idsLength = invitations.length
    const invitationsFeedback = [];

    this.getFeedback(ids, idsLength, invitationsFeedback, invitations, totalSkills, option);
  };


  getFeedback(ids, idsLength, invitationsFeedback, invitations, totalSkills, option) {
    if(ids.length) {
      const currentId = ids.pop();
      this.request(currentId)
          .then((data) => { 
            invitationsFeedback.push(data);
            this.getFeedback(ids, idsLength, invitationsFeedback,invitations, totalSkills, option);
            if(invitationsFeedback.length === idsLength) {
              if(option === 1) {
                skillsFeedbackLeft.getSkillsFeedbackLeft(invitationsFeedback, invitations, totalSkills);
              };
            };
          })
    }
  }
  
  
  request(id) {
    const urlGetFeedbackReceived = `https://matter-app.herokuapp.com/api/v1/invitations/${id}/feedback`;
    return new Promise((resolve, reject) => {
        fetch(urlGetFeedbackReceived)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => console.log(error, 'error in fetch'))
    })
  }
};