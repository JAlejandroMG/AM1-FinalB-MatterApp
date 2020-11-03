//[---------------------------- Starts: Settings ----------------------------]//
//+ Import
import CompleteSkills from './CompleteSkills.js';
//+ Instance
const completeSkills = new CompleteSkills;
//]----------------------------- Ends: Settings -----------------------------[//



export default class SkillsFeedbackLeft {
  getSkillsFeedbackLeft(feedbacks, invitations, totalSkills) {
    const skillsFeedbackLeft = [];

    feedbacks.forEach((feedback, index) => {      
      if(feedback.length > 0) { //< Aquí se procesan aquellas invitaciones que tienen al menos un skill con feedback
        //* Se crea un arreglo enumerando el total de skills al que se le irán quitando los skills ya procesados (checklist)
        const skillsLeft = []
        for(let i = 0; i < totalSkills; i++){
          skillsLeft.push(i+1);
        }
        //* Recorremos la cantidad total de skills para obtener los que no tienen feedback
        for(let j = 0; j < totalSkills; j++) {
          if(feedback[j]) { //* Aquí se procesan los skills con feedback
            const skillSkipIndex = skillsLeft.findIndex((value) => {
              return value === feedback[j].id
            });
            skillsLeft.splice(skillSkipIndex, 1);
          } else { //* Aquí se procesan los skills sin feedback
            skillsFeedbackLeft.push({invitation_id: invitations[index].invitation_id, skill_id: skillsLeft[0], user_id: invitations[index].user_id});
            skillsLeft.splice(0,1);
          };
        };
      } else { //< Aquí se procesan aquellas invitaciones que no tienen skills con feedback
          //* Recorremos la cantidad total de skills
          for(let i = 0; i < totalSkills; i++) {
            skillsFeedbackLeft.push({invitation_id: invitations[index].invitation_id, skill_id: i + 1, user_id: invitations[index].user_id});
          };
      };
    });
    completeSkills.completeSkills(skillsFeedbackLeft);
  };
};
