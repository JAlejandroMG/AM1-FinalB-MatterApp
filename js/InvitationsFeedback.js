//(---------------------------- Starts: Settings ----------------------------)//
//+ Import
import SkillsFeedbackLeft from './SkillsFeedbackLeft.js';
//+ Instance
const skillsFeedbackLeft = new SkillsFeedbackLeft;
//)----------------------------- Ends: Settings -----------------------------(//



export default class InvitationsFeedback {
  async getInvitationsFeedback(invitations, totalSkills, option) {
    const invitationsFeedbackInitial = [];
          console.log(invitations); //! Console!!!
          console.log('Empezamos'); //! CONSOLE
    const invitationsFeedback = await this.invitationsFeedback(invitations, 0, invitationsFeedbackInitial);
    console.log(invitationsFeedback);
          console.log('Terminamos'); //! CONSOLE
    // if(option === 1) {
    //   // console.log(invitations);
    //   console.log(invitationsFeedback)
    //   skillsFeedbackLeft.getSkillsFeedbackLeft(invitationsFeedback, invitations, totalSkills);
    // };
  };


  invitationsFeedback(invitations, index, invitationsFeedback) {
    return new Promise((resolve, reject) => {    
      if(index < invitations.length) {
        const urlGetFeedbackReceived = `https://matter-app.herokuapp.com/api/v1/invitations/${invitations[index].invitation_id}/feedback`;
        const getHeaders = {'Accept': 'application/json'};
        fetch(urlGetFeedbackReceived, {
          headers: getHeaders
        })
          .then(response => {
            status = response.status;
            return response.json();
          })
          .then(data => {
                  // console.log(data); //! CONSOLE
            invitationsFeedback.push(data);
                  // console.log(invitationsFeedback); //! CONSOLE
            index++
            this.invitationsFeedback(invitations, index, invitationsFeedback);
          })
      } else {
              console.log('Aquí ando...'); //! CONSOLE
              console.log(invitationsFeedback);
        resolve(invitationsFeedback);
              console.log('Y hasta acá llegué!'); //! CONSOLE
      };
    })
  };
};